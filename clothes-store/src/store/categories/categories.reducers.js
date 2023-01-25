import {CATEGORIES_ACTIONS} from "./categories.actions";


export const CATEGORIES_INITIAL_STATE = {
  categories: []
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
      case CATEGORIES_ACTIONS.SET_CATEGORIES :
        return {
          ...state,
          categories: payload
        }
      default:
        return state;
    }
}
