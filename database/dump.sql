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
ALTER TABLE IF EXISTS public.beaches ALTER COLUMN beach_id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.users_user_id_seq;
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.beaches_beach_id_seq;
DROP TABLE IF EXISTS public.beaches;
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
-- Name: beaches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.beaches (
    beach_id integer NOT NULL,
    user_id integer NOT NULL,
    beach_name character varying(500) NOT NULL,
    beach_lat character varying(200) NOT NULL,
    beach_long character varying(200) NOT NULL
);


--
-- Name: beaches_beach_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.beaches_beach_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: beaches_beach_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.beaches_beach_id_seq OWNED BY public.beaches.beach_id;


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
-- Name: beaches beach_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beaches ALTER COLUMN beach_id SET DEFAULT nextval('public.beaches_beach_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: beaches; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.beaches (beach_id, user_id, beach_name, beach_lat, beach_long) FROM stdin;
28	9	Long Beach	33.77005	-118.193741
29	9	Carlsbad	33.166039	-117.337929
31	9	Dana Point	33.467224	-117.698097
32	9	Redondo Beach	33.84498	-118.38724
33	9	San Clemente	33.427353	-117.612602
34	9	Catalina Island	33.331676	-118.384437
35	9	Newport Beach	33.608768	-117.87336
36	9	Capistrano Beach	33.45842	-117.66518
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (user_id, user_first_name, user_last_name, user_password) FROM stdin;
4	Mason	Keiser	$2b$10$1WQaDmGXi7xD8.gL/TKGFuh5NnQXl6cXMkHdt79nahzL3iIrboJpS
9	Guest	Guest	$2b$10$97hs8km7eC./6Iu0vezeHOKBmVdG169GRs8miDXyiNUY532sn456i
10	jim	bean	$2b$10$AXadqQXzp0/ofkX8gOB9TeV6PITmw/HeQ3jpuGajWWKY3FdFp./HK
11	Yung	Money	$2b$10$pq0OHEsdwsWcCuBpir6BGet2uLU38hfOnk/PfHXIcm0EZzgwSvhtW
12	Mason	Keiser	$2b$10$yj5lLjpici1b.AMvS7uZr.OWkp1V31Q7OgL56.EXCHV3Ntu1TVi9W
\.


--
-- Name: beaches_beach_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.beaches_beach_id_seq', 36, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 12, true);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

