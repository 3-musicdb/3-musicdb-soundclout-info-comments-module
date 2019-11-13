// Importing express framework, body-parser for post requests
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/model-postgres/index.js');
const faker = require('faker');


// Set PORT# to listen on
const PORT = 4000;

// Create server
const app = express();

app.use(bodyParser());

app.use(cors());

// Serve static files
app.use('/:id', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static('../public'));

// Eventually there will be get and post request handlers here!
// app.post('localhost:4000/newcomment', commentsRouter)

// replace the file path with the headshot from the database
app.get('/song/:id', (req, res) => {
  db.query(`select * from songs where song_id = ${req.params.id}`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('req.params: ', req.params);
      // console.log(data);
      const songInfo = data.rows;
      db.query(`select * from user_info where user_id = ${data.rows[0].user_id}`, (error, userData) => {
        if (error) {
          res.send(error);
        } else {
          songInfo[0].artistInfo = userData.rows[0];
          res.send(songInfo);
        }
      });
      // res.send(data.rows);
    }
  });
});

// get comments and replies
app.get('/song/:id/comments', (req, res) => {
  // song_id = req.params.id
  db.query(`select comments.comment_id, comments.comment, comments.user_id, comments.post_date, comments.song_time_post, replies.reply_id, replies.reply_text, replies.reply_user_id from comments left join replies on comments.comment_id = replies.comment_id where song_id = ${Math.round(Math.random() * 9999999 + 1)};`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('req.params: ', req.params);
      // console.log('res data rows: ', data);
      res.send(data.rows);
    }
  });
});

// get commenter user information
app.get('/song/:id/comments/:commentid', (req, res) => {
  db.query(`select * from user_info where user_id = ${req.params.commentid}`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(data.rows)
      res.send(data.rows);
    }
  });
});

// get replier user information
app.get('/song/:id/replies/:replyId', (req, res) => {
  db.query(`select * from user_info where user_id = ${req.params.replyId}`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data.rows);
    }
  });
});

// post comment
app.post('/song/:id/comments', (req, res) => {
  // song_id = req.params.id, comment = req.body.newComment; user_id, post_date, song_time_post are the same as the random math functions in this query string
  const queryString = `insert into comments(song_id, comment, user_id, post_date, song_time_post) values (${Math.round(Math.random() * 9999999 + 1)}, '${faker.lorem.words(Math.random() * 20)}', ${Math.round(Math.random() * 13999999 + 1)}, '${new Date().toLocaleDateString()}', ${Math.random()});`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('posted');
      res.sendStatus(201);
    }
  });
});

app.delete('/song/:id/comments/:commentid', (req, res) => {
  // comment_id = req.params.commentid
  const queryString = `delete from comments where comment_id = ${Math.round(Math.random() * 199999999 + 1)};`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('deleted');
      res.sendStatus(201);
    }
  });
});

app.delete('/song/:id/reply/:replyid', (req, res) => {
  const queryString = `delete from replies where reply_id = ${req.params.replyid};`;
  db.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('deleted');
      res.sendStatus(201);
    }
  });
});


// app.get('localhost:8080/artistpic.jpg', function(req, res){
//     res.sendFile('/Users/arunaiyer/Documents/hack reactor/fecSolo/soundclout-info-comments-module/public/tierra.jpg'); // change the path to your index.html
// });

// app.get('/hello.jpg', function(req, res){
//     res.sendFile('/Users/arunaiyer/Documents/hack reactor/fecSolo/soundclout-info-comments-module/joanna.jpg'); // change the path to your index.html
// });

// listen on port
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
