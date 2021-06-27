# My Southern California Surf Buddy
An application for users to find the nearest beach in SoCal and display the weather at the beach selected by the user.

* Utilizes Google Maps API and OpenWeatherMaps API

Link: https://mscsb.masonkeiser.com/

# Technologies Used
* React.js
* Node.js
* Express
* PostgreSQL
* Webpack 4
* HTML 5
* CSS 3
* Bootstrap 4
* AWS EC2
# Features
* User can view weather of current location
* User can click on a marker to view the weather at the selected Southern California beach
# Development
## System Requirements
* Node.js 10 or higher
* NPM 6 or higher
# Getting Started
1. Clone this repository:
```
git clone https://github.com/mason-keiser/mscsb.git
```
2. Locate cloned repository: 
```
cd mscsb
```
3. Install all dependencies with NPM:
```
npm install
```
4. Start postgreSQL server in terminal:
```
sudo service posgresql start
``` 
5. Create database that you will be using for the site:
```
createdb mscsb
```
6. Import database to PostgreSQL:
```
npm run db:import
```
7. Open a second terminal; navigate to project directory, start pgweb:
```
pgweb --db=mscsb
```
8. Start the project (in another terminal). You can view the application by opening http://localhost:3000 in your browser:
```
npm run dev
```
npm run dev
