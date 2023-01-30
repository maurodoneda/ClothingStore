import {createAction, Action, ActionWithPayload} from "../../utils/reducers/reducers.utils";
import {CATEGORIES_ACTIONS, Category} from "./models/category";


export type FetchCategoriesStart = Action<CATEGORIES_ACTIONS.FETCH_CATEGORIES_START>;
export type FetchCategoriesSucceed = ActionWithPayload<CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCEED, Category[]>;
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, Error>;

export type CategoriesAction =
    | FetchCategoriesStart
    | FetchCategoriesSucceed
    | FetchCategoriesFailed


export const fetchCategoriesStart = () : FetchCategoriesStart => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START);
export const fetchCategoriesSucceed = (categories : Category[]): FetchCategoriesSucceed => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCEED, categories);
export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, error);
