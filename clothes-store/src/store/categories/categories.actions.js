import {createAction} from "../../utils/reducers/reducers.utils";

export const CATEGORIES_ACTIONS = {
  SET_CATEGORIES: "SET_CATEGORIES"
}

export const setCategories = (categories) => createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories);
