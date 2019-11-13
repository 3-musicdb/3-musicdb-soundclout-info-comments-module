DROP DATABASE IF EXISTS soundclout_sdc_comments;

CREATE DATABASE soundclout_sdc_comments;

\c soundclout_sdc_comments

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
    user_id INT NOT NULL
        REFERENCES user_info(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    play_count INT,
    likes_count INT,
    reposted_count INT,
    song_length INT NOT NULL
);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    song_id INT NOT NULL
        REFERENCES songs(song_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    comment TEXT NOT NULL,
    user_id INT NOT NULL
        REFERENCES user_info(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    post_date DATE NOT NULL,
    song_time_post FLOAT NOT NULL
);
    

CREATE TABLE replies (
    reply_id SERIAL PRIMARY KEY,
    comment_id INT NOT NULL
        REFERENCES comments(comment_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    reply_text TEXT NOT NULL,
    user_id INT NOT NULL
        REFERENCES user_info (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    post_date DATE NOT NULL
);




COPY user_info(username, total_tracks, user_pic, followers) 
FROM '/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/users.csv' DELIMITER ',' CSV;

COPY songs(song_name, user_id, play_count, likes_count, reposted_count, song_length) 
FROM '/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/songs.csv' DELIMITER ',' CSV;

COPY comments(song_id, comment, user_id, post_date, song_time_post) 
FROM '/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/comments.csv' DELIMITER '|' CSV;

COPY replies(comment_id, reply_text, user_id, post_date) 
FROM '/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/replies.csv' DELIMITER '|' CSV;



