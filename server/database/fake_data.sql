BEGIN;

    INSERT INTO rooms
        (room_name, capacity, space, datashow, white_board, wifi, coffee_bar)
    VALUES
        ('Al-qudus', 30, '5*5', TRUE, TRUE, TRUE, TRUE),
        ('Amestrdam', 50, '6*6', TRUE, FALSE, TRUE, FALSE),
        ('tokyo', 10, '3*3', FALSE, TRUE, TRUE, FALSE),
        ('Berlin', 20, '4*4', TRUE, TRUE, TRUE, FALSE);

    INSERT INTO users
        (user_name, email, password)
    VALUES
        ('Hanan', 'example@gmail.com', '123456'),
        ('Tasneem', 'example2@gmail.com', '123456'),
        ('Yaquot', 'example3@gmail.com', '123456'),
        ('Abood', 'example4@gmail.com', '123456'),
        ('bayan', 'example5@gmail.com', '123456');


    INSERT INTO events
        (event_title, event_descriprion, event_date)
    VALUES
        ('Ui/Ux workshop', 'A workshop to introduce participants to Ui/Ux', '2020-05-19 10:00:00 AM'),
        ('HTML/CSS workshop', 'A workshop to introduce participants to HTML/CSS', '2020-06-25 10:00:00 AM'),
        ('JavaScript workshop', 'A workshop to introduce participants to JavaScript', '2020-06-26 10:00:00 AM'),
        ('Freelancer workshop', 'A workshop to introduce participants to freelancering', '2020-07-30 10:00:00 AM');

    COMMIT;