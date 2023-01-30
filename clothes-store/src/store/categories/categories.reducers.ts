import {CategoriesAction} from "./categories.actions";
import {CATEGORIES_ACTIONS} from "./models/category";
import Category from "../../pages/category/category.page";

export type CategoriesState = {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE : CategoriesState = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoriesAction) => {

    switch (action.type) {
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_START :
        return {
          ...state,
          isLoading: true
        }
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCEED :
        return {
          ...state,
          categories: action.payload,
          isLoading: false
        }
      case CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED :
        return {
          ...state,
          error: action.payload,
          isLoading: false
        }
      default:
        return state;
    }
}
