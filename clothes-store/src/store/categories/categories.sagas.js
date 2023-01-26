import {getCategories} from "../../utils/firebase/firebase.utils";
import {
  CATEGORIES_ACTIONS,
  fetchCategoriesFailed,
  fetchCategoriesSucceed
} from "./categories.actions";
import {all, call, put, takeLatest} from 'redux-saga/effects'


function* fetchCategoriesAsync(){
  try{
    const categories = yield call(getCategories);
    yield put(fetchCategoriesSucceed(categories));
  }
  catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

function* onFetchCategories(){
  yield takeLatest(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
  yield all([
    call(onFetchCategories)
  ])
}
