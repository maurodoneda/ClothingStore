import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories;

const categoriesSelector = createSelector(
  [selectCategoryReducer],
  (slice) => slice.categories
)

export const selectCategories = createSelector(
  [categoriesSelector],
  (categories) => categories.reduce((acc, data) => {
    const {title, items } = data;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (slice) => slice.isLoading
)
