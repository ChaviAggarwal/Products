import { productDetails } from './constants';

const getProductDetails = () => ({
  type: productDetails.GET_PRODUCT_DETAILS,
});

const getProductDetailsLoaded = data => ({
  type: productDetails.GET_PRODUCT_DETAILS_LOADED,
  data
});

const getProductDetailsError = error => ({
  type: productDetails.GET_PRODUCT_DETAILS_ERROR,
  error
});

const saveProductDetails = (data) => ({
  type: productDetails.SAVE_PRODUCT_DETAILS,
  data
});

const saveProductDetailsSuccess = data => ({
  type: productDetails.SAVE_PRODUCT_DETAILS_SUCCESS,
  data
});

const saveProductDetailsError = error => ({
  type: productDetails.SAVE_PRODUCT_DETAILS_ERROR,
  error
});

export {
  getProductDetails, getProductDetailsLoaded, getProductDetailsError,saveProductDetails,saveProductDetailsSuccess,
  saveProductDetailsError
};