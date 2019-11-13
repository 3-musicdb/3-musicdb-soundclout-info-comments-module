var faker = require('faker');
var fs = require('fs');
var zlib = require('zlib')
var gzip = zlib.createGzip();
var Readable = require('stream').Readable;

console.log('START TIME: ', new Date().getHours() + ':' + new Date().getMinutes());
var startTime = Math.round((new Date()).getTime() / 1000);



//USER_INFO
// console.log(faker.name.findName());
// console.log(faker.random.number( {min: 1, max: 100, precision:1}));
// console.log(faker.image.avatar());
// console.log(faker.random.number());

// writestream method
// const writeUsers = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/users.csv');
// function writeTenUsers(writer, encoding, callback){
//     let i = 14000000;

//     function write(){
//         let ok = true;
//         do{
//             if( i%500000 === 0){
//                 console.log(i)
//                 var endTIme = Math.round((new Date()).getTime() / 1000);
//                 var timeElapsed = (endTIme - startTime)/60
//                 console.log('TIME ELAPSED IN MINUTES: ', timeElapsed)

//             }

//             i-=1;
//             var user_id = 14000000 - i;
//             var username = faker.name.findName();
//             var totalTracks = faker.random.number( {min: 1, max: 100, precision:1});
//             var user_pic = faker.image.avatar();
//             var followers = faker.random.number();
//             var data = `${user_id},${username},${totalTracks},${user_pic},${followers}\n`;
//             if( i === 0) {
//                 writer.write(data, encoding, callback);
//             } else {
//                 ok = writer.write(data, encoding)
//             }
//         } while (i > 0 && ok);
//         if( i > 0) {
//             writer.once('drain', write);
//         }
//     }
//     write()
// }

// writeTenUsers(writeUsers, 'utf-8', () => {
//     console.log('END TIME: ', new Date().getHours() + ':' + new Date().getMinutes())
//     writeUsers.end()
// })

//compressing users.csv into gzip
// fs.createReadStream('users.csv').pipe(gzip).pipe(fs.createWriteStream('users.csv.gz'))

//writefile written as option instead of write stream
// var string  = '';
// for( var i = 1; i<=10; i++){
//     var username = faker.name.findName();
//     var totalTracks = faker.random.number({min: 1, max: 100, precision:1});
//     var user_pic = faker.image.avatar();
//     var followers = faker.random.number();
//     var data = `${username},${totalTracks},${user_pic},${followers}\n`;
//     string = string + data;
// }
// console.log(string);

// fs.writeFile('writeFileDataTest.csv', string, (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('success')
//     }
// })

//SONGS
//song names
//gen random numbers that can potentially skew curve
function randn_bm(min, max, skew) {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}

// console.log(Math.round(randn_bm(0, 3, 4)));


// console.log(faker.commerce.productName());
// //song length in seconds
// console.log(faker.random.number({min: 180, max: 300}))
// //user id needs a number within a range from the user limit set above
// console.log(faker.random.number({min: 1, max: 5000000}))
// //play_count
// console.log('PLAY COUNT: ', Math.round(randn_bm(0, 300000000, 12)))
// //likes_count
// console.log('LIKES COUNT: ', Math.round(randn_bm(0, 3000000, 8)))
// //repost_count
// console.log('REPOST COUNT: ', Math.round(randn_bm(0, 200000, 9)))


// const writeSongs = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/songs.csv');
// function writeTenSongs(writer, encoding, callback){
//     let i = 10000000;

//     function write(){
//         let ok = true;
//         do{
//             if( i%100000 === 0){
//                 console.log(i)
//             }
//             i-=1;
//             var song_id = 10000000-i;
//             var song_name = faker.commerce.productName();
//             var user_id = Math.round(Math.random() * 400000);
//                 if(user_id === 0){
//                     user_id = 1;
//                 }
//             var play_count = Math.round(randn_bm(0, 300000000, 12));
//                 if(play_count > 300000000){
//                     play_count = 300000000;
//                 }
//             var likes_count = Math.round(randn_bm(0, 3000000, 8));
//                 if(likes_count > 3000000){
//                     likes_count = 3000000;
//                 }
//             var reposted_count = Math.round(randn_bm(0, 200000, 9));
//                 if(reposted_count > 200000){
//                     reposted_count = 200000;
//                 }
//             var song_length = faker.random.number({min: 180, max: 300})
//             var data = `${song_id},${song_name},${user_id},${play_count},${likes_count},${reposted_count},${song_length}\n`;
//             if( i === 0) {
//                 writer.write(data, encoding, callback);
//             } else {
                
//                 ok = writer.write(data, encoding)
//             }
//         } while (i > 0 && ok);
//         if( i > 0) {
//             writer.once('drain', write);
//         }
//     }
//     write()
// }

// writeTenSongs(writeSongs, 'utf-8', () => {
//     writeSongs.end()
// })

// fs.createReadStream('songs.csv').pipe(gzip).pipe(fs.createWriteStream('songs.csv.gz'));



// //comments
// //song_id needs a number within the range of from the song limit set above
// console.log('SONG ID: ', Math.round(Math.random() * 10000000))
// //comment
// console.log(faker.random.words(faker.random.number({min: 1, max: 30})));
// console.log(faker.lorem.sentence())
// //user-id
//     //needs a number within the range of user numbers set above
// console.log('USER ID: ', Math.round((Math.random() * 13600000)) + 400000)
// //post_date
// console.log(faker.date.between('2014-01-01', '2019-11-15').toLocaleDateString())
//     // JSON.stringify(faker.date.between('2014-01-01', '2019-11-15')).substring(1, 11)
// //song_time_post
// console.log('SONG TIME: ', Math.random())

// const writeComments = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/comments.tsv');
// function writeTenComments(writer, encoding, callback){
//     let i = 100;

//     function write(){
//         let ok = true;
//         do{
//             if( i%10 === 0){
//                 console.log(i)
//                 var endTIme = Math.round((new Date()).getTime() / 1000);
//                 var timeElapsed = (endTIme - startTime)/60
//                 console.log('TIME ELAPSED IN MINUTES: ', timeElapsed)

//             }
//             i-=1;
//             var comment_id = 100 - i;
//             var song_id = faker.random.number( {min: 1, max: 10000000})
//             var comment = faker.lorem.words(Math.random() * 20)
//             var user_id = Math.floor((Math.random() * 13600000)) + 400000
//             var post_date = faker.date.between('2014-01-01', '2019-11-15').toDateString();
//             var replyNumber = Math.round(randn_bm(0, 3, 3.7));
//              if(replyNumber > 3){
//                     replyNumber = 3
//                 };
//             var replyArray = [];
//             if(replyNumber){
//                 for( var j = 0; j <= replyNumber; j++){
//                     replyArray.push(faker.random.number({min: 1, max: 100}))
//                 }
//             }
//             // var replies = JSON.stringify(replyArray)
//             var replies = replyArray;
//             var song_time_post = Math.random()
//             var data = `${comment_id}\t${song_id}\t${comment}\t${user_id}\t${post_date}\t${song_time_post}\t'"'${replies}'"'\n`;
//             if( i === 0) {
//                 writer.write(data, encoding, callback);
//             } else {
                
//                 ok = writer.write(data, encoding)
//             }
//         } while (i > 0 && ok);
//         if( i > 0) {
//             writer.once('drain', write);
//         }
//     }
//     write()
// }

// writeTenComments(writeComments, 'utf-8', () => {
//     console.log(new Date().getHours() + ':' + new Date().getMinutes())
//     writeComments.end()
// })

//JSON VERSION OF COMMENTS:
// const writeComments = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/comments.json');
// function writeTenComments(writer, encoding, callback){
//     let i = 210000000;

//     function write(){
//         let ok = true;
//         do{
//             if( i%500000 === 0){
//                 console.log(i)
//                 var endTIme = Math.round((new Date()).getTime() / 1000);
//                 var timeElapsed = (endTIme - startTime)/60
//                 console.log('TIME ELAPSED IN MINUTES: ', timeElapsed)

//             }
//             i-=1;
//             var comment_id = 210000000 - i;
//             var song_id = faker.random.number( {min: 1, max: 10000000})
//             var comment = faker.lorem.words(Math.random() * 20)
//             var user_id = Math.floor((Math.random() * 13600000)) + 400000
//             var post_date = faker.date.between('2014-01-01', '2019-11-15').toLocaleDateString();
//             var replyNumber = Math.round(randn_bm(0, 3, 3.7));
//              if(replyNumber > 3){
//                     replyNumber = 3
//                 };
//             var replyArray = [];
//             if(replyNumber){
//                 for( var j = 0; j <= replyNumber; j++){
//                     replyArray.push(faker.random.number({min: 1, max: 100}))
//                 }
//             }
//             // var replies = JSON.stringify(replyArray)
//             var replies = replyArray;
//             var song_time_post = Math.random()
//             var data = {
//                 _id: comment_id,
//                 song_id: song_id,
//                 comment: comment,
//                 user_id: user_id,
//                 post_date: post_date,
//                 song_time_post: song_time_post,
//                 replies: replyArray
//             };
//             // var data = `${comment_id}\t${song_id}\t${comment}\t${user_id}\t${post_date}\t${song_time_post}\t'"'${replies}'"'\n`;
//             var json = JSON.stringify(data);
//             if( i === 0) {
//                 writer.write(json, encoding, callback);
//             } else {
                
//                 ok = writer.write(json, encoding)
//             }
//         } while (i > 0 && ok);
//         if( i > 0) {
//             writer.once('drain', write);
//         }
//     }
//     write()
// }

// writeTenComments(writeComments, 'utf-8', () => {
//     console.log(new Date().getHours() + ':' + new Date().getMinutes())
//     writeComments.end()
// })


// fs.createReadStream('comments.csv').pipe(gzip).pipe(fs.createWriteStream('comments.csv.gz'));


// //replies
// //comment_id
//     //needs a number within the range from the comments limit set above
// console.log('comment id: ', faker.random.number( {min: 1, max: 200000000}));
// //reply_text
// console.log('reply text: ', faker.lorem.words(Math.floor(Math.random() * 20)))
// //user_id
//     //needs a number within the range from users
// console.log('user id: ', Math.floor((Math.random() * 13600000)) + 400000)
// //post_date
// console.log('date: ', faker.date.between('2014-01-01', '2019-11-15').toLocaleDateString())

// const writeReplies = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/replies.csv');
// function writeTenReplies(writer, encoding, callback){
//     let i = 20000000;

//     function write(){
//         let ok = true;
//         do{
//             if( i%500000 === 0){
//                 console.log(i)
//                 var endTIme = Math.round((new Date()).getTime() / 1000);
//                 var timeElapsed = (endTIme - startTime)/60
//                 console.log('TIME ELAPSED IN MINUTES: ', timeElapsed)

//             }
//             i-=1;
//             var comment_id = faker.random.number( {min: 1, max: 200000000});
//             var reply_text = faker.lorem.words(Math.random() * 20);
//             var user_id = Math.floor((Math.random() * 13600000)) + 400000;
//             var post_date = faker.date.between('2014-01-01', '2019-11-15').toLocaleDateString()
//             var data = `${comment_id}|${reply_text}|${user_id}|${post_date}\n`;
//             if( i === 0) {
//                 writer.write(data, encoding, callback);
//             } else {
                
//                 ok = writer.write(data, encoding)
//             }
//         } while (i > 0 && ok);
//         if( i > 0) {
//             writer.once('drain', write);
//         }
//     }
//     write()
// }

// writeTenReplies(writeReplies, 'utf-8', () => {
//     console.log(new Date().getHours() + ':' + new Date().getMinutes())
//     writeReplies.end()
// })

// fs.createReadStream('replies.csv').pipe(gzip).pipe(fs.createWriteStream('replies.csv.gz'));
