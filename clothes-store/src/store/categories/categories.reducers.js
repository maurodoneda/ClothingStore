import {CATEGORIES_ACTIONS} from "./categories.actions";


export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {}
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
      case CATEGORIES_ACTIONS.SET_CATEGORIES :
        return {
          ...state,
          categoriesMap: payload
        }
      default:
        return state;
    }
}
