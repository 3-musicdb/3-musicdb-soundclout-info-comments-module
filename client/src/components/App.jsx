import React from 'react';
// import Commentbar from './Commentbar.jsx';
// import ArtistInfo from './ArtistInfo.jsx';
// import TrackInfo from './TrackInfo.jsx';
import Comments from './Comments';
import './styles.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songInformation: {},
      artistInformation: {},
      songComments: [],
      newComment: ''
    };

    this.getSongComments = this.getSongComments.bind(this);
    this.getSongInfo = this.getSongInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postSongComment = this.postSongComment.bind(this);
  }

  componentDidMount() {
    this.getSongInfo();
    this.getSongComments();
  }

  getSongInfo() {
    axios.get(`http://localhost:4000/song${location.pathname}`)
      .then((data) => {
        // console.log('song info: ', data.data);
        this.setState({ songInformation: data.data[0], artistInformation: data.data[0].artistInfo })
      });
  }

  getSongComments() {
    axios.get(`http://localhost:4000/song${location.pathname}comments`)
      .then((data) => {
        // console.log(songId)
        // console.log(location.pathname)
        // console.log('song comments', data.data);
        this.setState({ songComments: data.data });
      });
  }

  handleChange(event) {
    this.setState({
      newComment: event.target.value,
    });
  }

  postSongComment() {
    axios.post(`http://localhost:4000/song${location.pathname}comments`, { newComment: this.state.newComment })
      .then((res) => {
        console.log(res.status);
        axios.get(`http://localhost:4000/song${location.pathname}comments`)
          .then((data) => {
          // console.log(songId)
          // console.log(location.pathname)
            console.log('song comments', data.data);
            this.setState({ songComments: data.data }, () => {
              console.log(this.state.songComments);
            });
          });
      });
  }


  render() {
    return (
      <div>
        <h3>{this.state.songInformation.song_name}</h3>
        <h5>{this.state.artistInformation.username}</h5>
        <div>
          <input type='text' value={this.state.newComment} onChange={this.handleChange}></input>
          <button onClick={this.postSongComment}>{'Submit'}</button>
        </div>
        <div>
          {this.state.songComments.map((comment) => {
            return (
              <Comments songComment={comment} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;