BEGIN;

    INSERT INTO rooms
        (room_id, room_name, capacity, space, datashow, white_board, wifi, coffee_bar)
    VALUES
        ('Al-qudus', 30, '5*5', TRUE, TRUE, TRUE, TRUE),
        ('Amestrdam', 50, '6*6', TRUE, FALSE, TRUE, FALSE),
        ('tokyo', 10, '3*3', FALSE, TRUE, TRUE, FALSE),
        ('Berlin', 20, '4*4', TRUE, TRUE, TRUE, FALSE);

    INSERT INTO usres
        (user_id, user_name, email, password)
    VALUES
        ('Hanan', 'example@gmail.com', '123456'),
        ('Tasneem', 'example2@gmail.com', '123456'),
        ('Yaquot', 'example3@gmail.com', '123456'),
        ('Abood', 'example4@gmail.com', '123456'),
        ('bayan', 'example5@gmail.com', '123456');


    INSERT INTO events
        (event_id, event_title, event_descriprion, event_date, user_id, room_id)
    VALUES
        ('Ui/Ux workshop', 'A workshop to introduce participants to Ui/Ux', '2020-05-19 10:00:00 AM', 3, 1),
        ('HTML/CSS workshop', 'A workshop to introduce participants to HTML/CSS', '2020-06-25 10:00:00 AM', 2, 1),
        ('JavaScript workshop', 'A workshop to introduce participants to JavaScript', '2020-06-26 10:00:00 AM', 4, 1),
        ('Freelancer workshop', 'A workshop to introduce participants to freelancering', '2020-07-30 10:00:00 AM', 1, 1);

    COMMIT;