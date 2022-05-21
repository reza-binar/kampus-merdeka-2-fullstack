import { GET_ALL_POSTS, POSTS_ERROR } from "../actions/types";

const initialState = {
  posts: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
