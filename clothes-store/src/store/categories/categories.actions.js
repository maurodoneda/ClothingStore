import {createAction} from "../../utils/reducers/reducers.utils";

export const CATEGORIES_ACTIONS = {
  FETCH_CATEGORIES_START: "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCEED: "categories/FETCH_CATEGORIES_SUCCEED",
  FETCH_CATEGORIES_FAILED: "categories/FETCH_CATEGORIES_FAILED",
}

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START);
export const fetchCategoriesSucceed = (categories) => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCEED, categories);
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, error);



