import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from './actions/postAction';

class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props.posts;
    console.log('====================================');
    console.log(posts);
    console.log('====================================');

    const cardList = posts.map((element) => {
      return (
        <div key={element.id}>
          <h5>
            {/* this is going to post detail */}
            <Link to={`/post/${element.id}`}>{element.title} </Link>
          </h5>
        </div>
      );
    });
    return (
      <div>
        <h4 className="text-center">Gallery Image</h4>
        <div className="container">{cardList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post,
});

export default connect(mapStateToProps, { getPosts })(Post);
