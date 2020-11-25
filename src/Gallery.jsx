import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {
  render() {
    const { photos } = this.props;
    const photoCard = photos.map((element) => {
      return (
        <div key={element.id}>
          <h5>
            <Link to={'/gallery/' + element.id}>{element.title} </Link>
          </h5>
          <img src={element.thumbnailUrl} alt="" />
        </div>
      );
    });
    return (
      <div>
        <h4 className="text-center">Gallery Image</h4>
        <div className="container">{photoCard}</div>
      </div>
    );
  }
}

export default Gallery;
