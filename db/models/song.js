var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  streams: Number,
  likes: Number,
  userInteraction: {
    username: String,
    userpicture: String,
    liked: Boolean,
    reposted: Boolean
  },
  tags: [String],
  description: String,
  releasedBy: String,
  releaseDate: Date,
  pLine: String,
  cLine: String,
  explicit: Boolean,
  artist: {
    picture: String,
    name: String,
    followers: Number,
    tracks: Number,
    pro: Boolean    
  },
  comments: [
      {
        timeInSongSeconds: Number,
        timePosted: Date,
        commentText: String,
        username: String,
        picture: String,
        followers: Number,
        location: String
      }
  ]
});

var SongModel = mongoose.model('Song', songSchema);

// findAll retrieves all songs
function findAll(callback) {
  SongModel.find({}, callback);
}

// findOne will retrieve the song associated with the given id
function findOne(id, callback) {
  SongModel.find({id: id}, callback);
}

// insertOne inserts a song into the db
function insertOne(story, callback) {
  SongModel.create(story, callback);
}

// clear clears the db
function clear(callback) {
  SongModel.deleteMany({}, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.clear = clear;