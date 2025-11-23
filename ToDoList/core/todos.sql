CREATE TABLE IF NOT EXISTS todotable(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    project VARCHAR(255),
    sessionuser VARCHAR(255),
    watched BOOLEAN,
    date VARCHAR(255)
)