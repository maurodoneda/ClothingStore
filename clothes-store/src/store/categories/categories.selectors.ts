import {createSelector} from "reselect";
import {Category, CategoryMap} from "./models/category";
import {CategoriesState} from "./categories.reducers";

const selectCategoryReducer = (state) : CategoriesState => state.categories;

const categoriesSelector = createSelector(
  [selectCategoryReducer],
  (slice) => slice.categories
)

export const selectCategories = createSelector(
  [categoriesSelector],
  (categories) : CategoryMap => categories.reduce((acc, data) => {
    acc[data.title.toLowerCase()] = data.items;
    return acc;
  }, {} as CategoryMap)
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (slice) => slice.isLoading
)
