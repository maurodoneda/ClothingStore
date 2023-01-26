import {CATEGORIES_ACTIONS} from "./categories.actions";


export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_START :
        return {
          ...state,
          isLoading: true
        }
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCEED :
        return {
          ...state,
          categories: payload,
          isLoading: false
        }
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED :
        return {
          ...state,
          error: payload,
          isLoading: false
        }
      default:
        return state;
    }
}
