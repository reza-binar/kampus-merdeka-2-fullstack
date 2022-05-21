import { AUTH_ERROR, LOGIN, LOGOUT } from "./types";

export const login = (data) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      });
    } else {
      authError(result.error);
    }
  } catch (error) {
    authError(error);
  }
};

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const response = await fetch("http://localhost:8000/api/v1/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      });
    } else {
      authError(result.error);
    }
  } catch (error) {
    authError(error);
  }
};
