import React from 'react';
import './styles.css';
import Axios from 'axios';
const path = require('path');
import Replies from './Replies.jsx';


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentObj: this.props.songComment,
      user_id: this.props.songComment.user_id,
      userInfo: {}
    };

    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/song${location.pathname}comments/${this.state.user_id}`)
      .then((data) => {
        this.setState({ userInfo: data.data[0] });
      });
  }

  deleteComment() {
    Axios.delete(`http://localhost:4000/song${location.pathname}comments/${this.state.commentObj.comment_id}`)
      .then((response) => {
        if (this.state.commentObj.reply_id) {
          Axios.delete(`http://localhost:4000/song${location.pathname}reply/${this.state.commentObj.reply_id}`)
            .then((response) => {
              console.log('comment and response deleted: ', response.status);
            })
        } else {
          console.log('comment only deleted', response.status);
        }
      });
  }

  render() {
    return (
      <ul>
        <li style={{ fontWeight: 'bold' }}>{this.state.userInfo.username}</li>
        <li style={{ fontStyle: 'italic' }}>{this.state.commentObj.comment}
          {
            this.state.commentObj.reply_text
              ? (
                <ul>
                  <Replies replyText={this.state.commentObj.reply_text} replyUserId={this.state.commentObj.reply_user_id} />
                </ul>
              )
              : (
                null
              )
            }
        </li>
        <span><button type="submit" onClick={this.deleteComment}>{'remove'}</button></span>
      </ul>
    );
  }
}

export default Comments;
