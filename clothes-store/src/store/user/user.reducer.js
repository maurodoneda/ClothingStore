import {ACTIONS} from "./user.actions";


const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
}
