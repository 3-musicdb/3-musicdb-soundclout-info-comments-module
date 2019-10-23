var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Songs = require('./db/models/song.js');

mongoose.connect('mongodb://localhost/soundclout');

var seedDb = function(data) {

  Songs.clear((err, instance) => {
    if (err) {
       console.log(err);
    } else {
        console.log("clear success");
    }
  })

  for(var i = 0; i < data.length; i++) {
    var song = data[i];

    Songs.insertOne(song, (err, instance) => {
     if (err) {
        console.log(err);
     } else {
         console.log("success");
     }
   })
  }

};

seedDb(data);