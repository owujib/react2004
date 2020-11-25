import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Gallery from './Gallery';
import SingleGallery from './SingleGallery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        this.setState({
          photos: response.data.slice(0, 50),
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
        <Route path="/gallery/:id" component={SingleGallery} />
        <Route
          path="/gallery"
          exact
          render={(routerProps) => (
            <Gallery {...routerProps} photos={this.state.photos} />
          )}
        />
      </div>
    );
  }
}

export default App;
