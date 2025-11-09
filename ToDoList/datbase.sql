CREATE DATABASE todo

CREATE TABLE todotable(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    project VARCHAR(255),
    date VARCHAR(255)
)