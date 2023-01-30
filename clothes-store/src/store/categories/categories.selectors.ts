import {createSelector} from "reselect";
import {Category} from "./models/category";

const selectCategoryReducer = (state) => state.categories;

const categoriesSelector = createSelector(
  [selectCategoryReducer],
  (slice) => slice.categories
)

export const selectCategories : Category[] = createSelector<Category[]>(
  [categoriesSelector],
  (categories) => categories.reduce((acc : Category[], data : Category) => {
    const {title, items } = data;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (slice) => slice.isLoading
)
