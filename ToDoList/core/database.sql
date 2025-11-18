CREATE TABLE IF NOT EXISTS todotable(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    project VARCHAR(255),
    date VARCHAR(255)
)