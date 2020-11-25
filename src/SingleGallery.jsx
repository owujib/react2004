import React, { Component } from 'react';
import axios from 'axios';

export class SingleGallery extends Component {
  state = {
    photo: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          photo: response.data,
        });
      });
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="container">
        <h4>{this.state.photo.title}</h4>
        <img src={this.state.photo.thumbnailUrl} alt=".." />
      </div>
    );
  }
}

export default SingleGallery;
