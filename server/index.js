require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const bcrypt = require('bcrypt');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/signUp/', (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.user_password, salt)

  const sql = `
  INSERT INTO "users" ("user_first_name", "user_last_name", "user_password")
  VALUES                  ($1, $2, $3)
  RETURNING *;
  `;

  const params = [req.body.user_first_name, req.body.user_last_name, hash];
  
  for (let i = 0; i < params.length; i ++) {
    if (!params[i]) {
      return res.status(400).json({ error: 'all signup input forms must be filled' });
    }
  }
  db.query(sql, params)
    .then(result => {
      const row = result.rows[0];
      result.rows.forEach((i) => {
        delete i.user_password
      })
      res.status(201).json(row);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

//  SEARCH DATABASE FOR EXISTING EMAIL AND PASSWORD API GET REQUEST

app.get('/api/login/:user_first_name/:user_password/', (req, res, next) => {
  const firstname = req.params.user_first_name;
  const password = req.params.user_password;

  const sqlToGetPass = `
  SELECT "user_password" from "users"
  WHERE "user_first_name" = $1
  `
  const sql = `
  SELECT * FROM "users"
  WHERE "user_first_name" = $1 
  AND "user_password" = $2;
  `;

  db.query(sqlToGetPass, [firstname] )
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user information contains: ${firstname}` });
      } else {
        let hashedPass = result.rows[0];
        bcrypt.compare(password, hashedPass.user_password, async function(err, isMatch) {
          if (err) {
            return err
          } else if (!isMatch) {
            return res.status(400).json({ message: `passwords do not match` });
          } else {
            console.log('passwords match!')
            db.query(sql, [firstname, hashedPass.user_password] )
            .then(result => {
              if (!result.rows[0]) {
                return res.status(400).json({ message: `No user information contains: ${firstname} or ${hashedPass.user_password}` });
              } else {
                result.rows.forEach((i) => {
                  delete i.user_password
                })
                return res.status(200).json(result.rows)
              }
            })
            .catch(err => {
              console.error(err);
              res.status(500).json({ error: 'An unexpected error occurred.' });
            });
          }
        })
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

// API TO ADD SAVED BEACH TO USERS BEACHES

app.post('/api/addBeach', (req, res, next) => {
  const beachInfo = {
    user_id: req.body.user_id,
    beach_name: req.body.beach_name,
    beach_lat: req.body.beach_lat, 
    beach_long: req.body.beach_long
  }

  const sql = `
  INSERT INTO "beaches" ("user_id", "beach_name", "beach_lat", "beach_long")
  VALUES ($1, $2, $3, $4)
  RETURNING * 
  `
  const params = [beachInfo.user_id, beachInfo.beach_name, beachInfo.beach_lat, beachInfo.beach_long]

  db.query(sql, params) 
      .then ((result) => {
          if (!result.rows[0]) {
            return res.status(400).json({ message: `No user information contains: ${firstname} or ${hashedPass.user_password}` });
          } else {
            return res.status(200).json(result.rows)
          }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// API TO GET USERS BEACHES 

app.get('/api/getBeaches/:user_id', (req, res, next) => {
  const user_id = req.params.user_id

  const sql = `
  SELECT * FROM "beaches"
  WHERE "user_id" = $1
  `

  db.query(sql,  [user_id]) 
      .then ((result) => {
          if (!result.rows[0]) {
            return res.status(400).json({ message: `No user information` });
          } else {
            return res.status(200).json(result.rows)
          }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
})

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
