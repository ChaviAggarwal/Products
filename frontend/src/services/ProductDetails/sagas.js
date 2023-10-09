import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { getProductDetailsLoaded, getProductDetailsError, saveProductDetailsSuccess, saveProductDetailsError } from './actions';
import { productDetails } from './constants';
// import cartData from '../../utils/cartDetails.json';
import * as api from '../../utils/request';



/**
 * 
 * @param {*} page 
 */
function* getProductDetails() {
  const { result, error } = yield call(api.fetchProducts)

  if (error) {
    yield put(getProductDetailsError(error));
  }

  yield put(getProductDetailsLoaded(result));
}

/**
 * 
 * @param {*} page 
 */
function* saveProductDetails(action) {

  console.log(action)
  if(action)
  {
  const userInput  = action.data;
  const { result, error } = yield call(api.saveProducts,userInput)

  if (error) {
    yield put(saveProductDetailsError(error));
  }

  yield put(saveProductDetailsSuccess(result));
  
}
}

/**
 * 
 */
function* productDetailsSaga() {
  yield takeLatest(productDetails.GET_PRODUCT_DETAILS, getProductDetails);
}
function* productDetailsSaveSaga() {
  yield takeEvery(productDetails.SAVE_PRODUCT_DETAILS, saveProductDetails);
}

export {
  productDetailsSaga, productDetailsSaveSaga, getProductDetails,saveProductDetails
};
