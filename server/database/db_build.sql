BEGIN;

    DROP TABLE IF EXISTS rooms, users, events
    CASCADE;

CREATE TABLE rooms
(
    room_id SERIAL PRIMARY KEY NOT NULL,
    room_name VARCHAR(50) NOT NULL,
    capacity INT NOT NULL,
    space VARCHAR(20) NOT NULL,
    datashow BOOLEAN,
    white_board BOOLEAN,
    wifi BOOLEAN,
    coffee_bar BOOLEAN
);

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY ,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    password TEXT NOT NULL


);

CREATE TABLE events
(
    event_id SERIAL PRIMARY KEY ,
    event_title VARCHAR(50) NOT NULL,
    event_descriprion VARCHAR(500) NOT NULL,
    event_date TIMESTAMP,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    room_id INTEGER,
    FOREIGN KEY (room_id) REFERENCES rooms (room_id)

);

COMMIT;