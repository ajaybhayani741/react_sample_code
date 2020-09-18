import { TOKEN } from "../constants";

export const currentUserTokenAction = (token) => async dispatch => {
    dispatch({ type: TOKEN, payload: { token, isLoggedIn: token ? true : false } })
};