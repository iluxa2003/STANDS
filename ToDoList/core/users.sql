CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    sessionuser VARCHAR(255),
    password VARCHAR(255)
)