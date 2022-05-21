import { GET_ALL_POSTS, POSTS_ERROR } from "./types";

export const getAllPosts = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    dispatch({
      type: GET_ALL_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response,
    });
  }
};
