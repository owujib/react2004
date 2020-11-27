import axios from 'axios';

import { GET_ALL_POSTS } from './types';

export const getPosts = () => {
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
      return dispatch({
        type: GET_ALL_POSTS,
        payload: response.data,
      });
    });
  };
};
