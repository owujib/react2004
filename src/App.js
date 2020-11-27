import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Post from './Post';
import PostDetail from './PostDetail';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data.slice(0, 50),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:id" component={PostDetail} />

        {/* handling props on route*/}
        <Route
          path="/post"
          exact
          render={(routerProps) => <Post {...routerProps} />}
        />
      </div>
    );
  }
}

export default App;
