CREATE SCHEMA IF NOT EXISTS valmont;


DROP TABLE IF EXISTS valmont.main_val;
DROP TABLE IF EXISTS valmont.category_val;
DROP TABLE IF EXISTS valmont.type_val;
DROP TABLE IF EXISTS valmont.area_val;
DROP TABLE IF EXISTS valmont.file_val;
DROP TABLE IF EXISTS valmont.user_val;


CREATE TABLE valmont.type_val(
id SERIAL PRIMARY KEY,
type TEXT UNIQUE
);

CREATE TABLE valmont.category_val(
id SERIAL PRIMARY KEY,
type_id INTEGER REFERENCES valmont.type_val(id),
category TEXT NOT NULL UNIQUE,
colour TEXT NOT NULL
);

CREATE TABLE valmont.area_val(
id SERIAL PRIMARY KEY,
area TEXT NOT NULL
);

CREATE TABLE valmont.file_val (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT
);

CREATE TABLE valmont.user_val (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    role INTEGER, -- 0=admin, 1=editor, 2=user
    email TEXT UNIQUE,
    password TEXT NOT NULL
);



CREATE table valmont.main_val (
    id SERIAL PRIMARY KEY,
    title TEXT,
    subtitle TEXT,
    description TEXT,
    type_id INTEGER REFERENCES valmont.type_val(id),
    category_id INTEGER REFERENCES valmont.category_val(id),
    year INTEGER,
    area_id INTEGER REFERENCES valmont.area_val(id),
    status BOOLEAN,
    file_id INTEGER REFERENCES valmont.file_val(id),
    last_edit_date TIMESTAMP,
    author_id INTEGER REFERENCES valmont.user_val(id),
    last_edit_person_id INTEGER REFERENCES valmont.user_val(id),
    geom geometry(Point, 3857)
)

;