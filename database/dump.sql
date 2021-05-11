--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS public.users ALTER COLUMN user_id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.users_user_id_seq;
DROP TABLE IF EXISTS public.users;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_first_name text NOT NULL,
    user_last_name text NOT NULL,
    user_password character varying(500) NOT NULL
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (user_id, user_first_name, user_last_name, user_password) FROM stdin;
1	yung	lean	123123#$(*&@$,n,
2	yo	mama	$2b$10$N7uZ50e1847q/199mfKFb.6hrueK2poKG3HZApmItcNJuoa/ePfhm
3	yo	deez	$2b$10$PbRZm2Pw0dji09zInoqlHOFTVdREeTMnaHkzBd1O5VIqJ5.1X7re2
4	Mason	Keiser	$2b$10$1WQaDmGXi7xD8.gL/TKGFuh5NnQXl6cXMkHdt79nahzL3iIrboJpS
5	Melissa	Kim	$2b$10$lrJ8UsCR.yBmCT3kJJWGBO.y3AFMdnUtz1bIUTG86/CfPqF7PI2Ba
6	new	user	$2b$10$BEk6TUcI88z87uMTW3QZ6O33aknK5N8K5WxWiOUP3o1VRYLINeV3u
7	new	me	$2b$10$0rqOu89h66.8Sgn4Fs15cueV7V4cJi/Gpj9QzYVbpQTsaiK3VHD7K
8	new	me	$2b$10$E.9HqVEtdJ7gn6uNiOxsA.fZChzhWcIiUrKK5ghuTRhOhNvCBEGs.
\.


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 8, true);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

