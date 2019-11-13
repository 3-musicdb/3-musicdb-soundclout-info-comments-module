const faker = require('faker');

module.exports = {
  randomPost
};

function randomPost(userContext, event, done) {
  const song_id = Math.round(Math.random() * 9999999 + 1);
  const comment = faker.lorem.words(Math.random() * 20);
  const user_id = Math.round(Math.random() * 9999999 + 1);
  const post_date = new Date().toLocaleDateString();
  const song_time_post = Math.random();
  const comment_id = Math.round(Math.random() * 199999999 + 1);

  userContext.vars.song_id = song_id;
  userContext.vars.comment = comment;
  userContext.vars.user_id = user_id;
  userContext.vars.post_date = post_date;
  userContext.vars.song_time_post = song_time_post;
  userContext.vars.comment_id = comment_id;

  return done();
}