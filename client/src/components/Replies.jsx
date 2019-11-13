import React from 'react';
import './styles.css';
import Axios from 'axios';

class Replies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replyText: this.props.replyText,
      replyUserId: this.props.replyUserId,
      replyUserInfo: {}
    };

    this.getReplierInfo = this.getReplierInfo.bind(this);
  }

  componentDidMount() {
    this.getReplierInfo();
  }

  getReplierInfo() {
    Axios.get(`http://localhost:4000/song${location.pathname}replies/${this.state.replyUserId}/`)
      .then((data) => {
        this.setState({ replyUserInfo: data.data[0] });
      });
  }

  render() {
    return (
      <div>
        <li style={{fontWeight: 'bold'}}>{this.state.replyUserInfo.username}</li>
        <li style={{fontStyle: 'italic'}}>{this.state.replyText}</li>
      </div>
    );
  }
}

export default Replies;
