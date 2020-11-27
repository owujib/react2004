import React, { Component } from 'react';
import axios from 'axios';

export class PostDetail extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          post: response.data,
        });
      });
  }
  render() {
    console.log(this.state.post);
    return (
      <div className="container">
        <h4>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}

export default PostDetail;
