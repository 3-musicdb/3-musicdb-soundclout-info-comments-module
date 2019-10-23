module.exports = [
    {
        id: 1,
        name: 'Unemployed',
        streams: 500,
        likes: 100,
        reposts: 200,
        userInteraction: {
          username: 'Aruna Iyer',
          userpicture: './headshot.jpg',
          liked: true,
          reposted: true
        },
        tags: ['hip hop'],
        description: 'new single from the creator of Whack World',
        releasedBy: '',
        releaseDate: new Date('March 19, 2019 00:00:00'),
        pLine: '℗ 2019 Interscope Records',
        cLine: '© 2019 © 2019 Interscope Records',
        explicit: true,
        artist: {
          picture: './tierra.jpg',
          name: 'Tierra Whack',
          followers: 29702,
          tracks: 28,
          pro: true    
        },
        comments: [
            {
              timeInSongSeconds: 160,
              timePosted: new Date('October 13, 2019 00:00:00'),
              commentText: 'fire',
              username: 'Aruna Iyer',
              picture: './headshot.jpg',
              followers: 2,
              location: 'Berkeley, CA'
            },
            {
              timeInSongSeconds: 128,
              timePosted: new Date('October 14, 2019 00:00:00'),
              commentText: 'fire!!!!',
              username: 'Aruna Iyer',
              picture: './headshot.jpg',
              followers: 2,
              location: 'Berkeley, CA'
            }
        ]
      },
      {
        id: 2,
        name: 'Sapokanikan',
        streams: 8711,
        likes: 1500,
        reposts: 5,
        userInteraction: {
          username: 'Aruna Iyer',
          liked: true,
          reposted: true
        },
        tags: ['folk'],
        description: '',
        releasedBy: 'Drag City Records',
        releaseDate: new Date('December 23, 2015 03:24:00'),
        pLine: '℗ 2015 2015 Drag City Inc.',
        cLine: '© 2015 2015 Drag City Inc.',
        artist: {
          picture: './joanna.jpg',
          name: 'Joanna Newsom',
          followers: 1332,
          tracks: 50,
          pro: true    
        },
        comments: [
            {
              timeInSongSeconds: 200,
              timePosted: new Date('October 14, 2019 00:00:00'),
              commentText: 'amazing',
              username: 'Aruna Iyer',
              picture: './headshot.jpg',
              followers: 2,
              location: 'Berkeley, CA'
            }
        ]
      }
    ];