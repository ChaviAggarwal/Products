import { fromJS } from 'immutable';

import { productDetails } from './constants';

const initialState = fromJS({
  productData: null,
  productCount:null,
  productDetailsDataLoading: null,
  productDetailsDataLoaded: null,
  productDetailsDataError: null,
  productSaved:null,
  productSaveError:null,
  productSaveLoading:null
});

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productDetails.GET_PRODUCT_DETAILS:
      return state
        .set('productDetailsDataLoading', true)
        .set('productDetailsDataError', null);

    case productDetails.GET_PRODUCT_DETAILS_LOADED:
      return state
        .set('productCount', action.count)
        .set('productData', action.data)
        .set('productDetailsDataLoading', false)
        .set('productDetailsDataLoaded', true)
        .set('productDetailsDataError', null);

    case productDetails.GET_PRODUCT_DETAILS_ERROR:
      return state
        .set('productDetailsDataLoading', false)
        .set('productDetailsDataLoaded', false)
        .set('productDetailsDataError', action.error);

    case productDetails.SAVE_PRODUCT_DETAILS:
      return state
        .set('productSaveLoading', true)
        .set('productSaved', false);
        

    case productDetails.SAVE_PRODUCT_DETAILS_SUCCESS:
      return state
        .set('productSaveLoading', false)
        .set('productSaved', true)
        .set('productDetailsDataError', null);

    case productDetails.SAVE_PRODUCT_DETAILS_ERROR:
      return state
        .set('productSaveLoading', false)
        .set('productSaved', false)
        .set('productSaveError', action.error);
    
    default:
      return state;
  }
};

export default productDetailsReducer;
