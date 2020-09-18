import { TOKEN } from "../constants";

const initialState = {
    token: '',
    isLoggedIn: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOKEN:
            const { token, isLoggedIn } = action.payload

            return {
                ...state,
                isLoggedIn,
                token,
            };

        default:
            return state;
    }
}