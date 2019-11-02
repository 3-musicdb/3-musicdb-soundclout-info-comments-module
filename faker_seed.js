var faker = require('faker');
var fs = require('fs');

const writeUsers = fs.createWriteStream('/Users/rahimlaiwalla/Hack Reactor/soundclout-info-comments-module/users.csv');

//user_info
// console.log(faker.name.findName());
// console.log(faker.random.number( {min: 1, max: 100, precision:1}));
// console.log(faker.image.avatar());
// console.log(faker.random.number());

function writeTenUsers(writer, encoding, callback){
    let i = 10;

    function write(){
        let ok = true;
        do{
            i-=1;
            var username = faker.name.findName();
            var totalTracks = faker.random.number( {min: 1, max: 100, precision:1});
            var user_pic = faker.image.avatar();
            var followers = faker.random.number();
            var data = `${username},${totalTracks},${user_pic},${followers}\n`;
            if( i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding)
            }
        } while (i > 0 && ok);
        if( i > 0) {
            writer.once('drain', write);
        }
    }
    write()
}

writeTenUsers(writeUsers, 'utf-8', () => {
    writeUsers.end()
})

// //songs
// //song names
// console.log(faker.commerce.productName());
// //song length in seconds
// console.log(faker.random.float({min: 180, max: 300}))
// //user id needs a number within a range from the user limit set above
// console.log(faker.random.number())
// //play_count
// console.log(faker.random.number())
// //likes_count
// console.log(faker.random.number())
// //repost_count
// console.log(faker.random.number())

// //comments
// //song_id needs a number within the range of from the song limit set above
// console.log(faker.random.number())
// //comment
// console.log(faker.random.words(faker.random.number({min: 1, max: 30})));
// //user-id
//     //needs a number within the range of user numbers set above
// console.log(faker.random.number())
// //post_date
// console.log(faker.date.between('2014-01-01', '2019-15-11'))
// //song_time_post
// console.log(faker.random.number({min: 1, max: 100}))


// //replies
// //comment_id
//     //needs a number within the range from the comments limit set above
// console.log(faker.random.number());
// //reply_text
// console.log(faker.random.words(faker.random.number({min: 1, max: 30})))
// //user_id
//     //needs a number within the range from users
// console.log(faker.random.number())
// //post_date
// console.log(faker.date.between('2014-01-01', '2019-15-11'))

