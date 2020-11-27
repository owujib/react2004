import { GET_ALL_POSTS } from '../actions/types';

let initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
