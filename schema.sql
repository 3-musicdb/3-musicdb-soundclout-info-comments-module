DROP DATABASE IF EXISTS soundclout_comments;

CREATE DATABASE soundclout_comments;

\c soundclout_comments

CREATE TABLE user_info (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    total_tracks INT,
    user_pic TEXT,
    followers INT
);


CREATE TABLE songs (
    song_id SERIAL PRIMARY KEY,
    song_name TEXT NOT NULL,
    user_id INT NOT NULL,
    play_count INT,
    likes_count INT,
    reposted_count INT,
    CONSTRAINT FOREIGN KEY (user_id) MATCH FULL
        REFERENCES songs (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    song_id INT NOT NULL,
    comment TEXT NOT NULL,
    user_id INT NOT NULL,
    post_date DATE NOT NULL,
    song_time_post FLOAT NOT NULL,
    CONSTRAINT FOREIGN KEY (user_id) MATCH FULL
        REFERENCES user_info (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (song_id) MATCH FULL
        REFERENCES songs (song_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE replies (
    reply_id SERIAL PRIMARY KEY,
    comment_id INT NOT NULL,
    reply_text TEXT NOT NULL,
    user_id INT NOT NULL,
    post_date DATE NOT NULL,
    song_time_post FLOAT NOT NULL,
    CONSTRAINT FOREIGN KEY (comment_id)
        REFERENCES comments (comment_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (user_id)
        REFERENCES user_info (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
