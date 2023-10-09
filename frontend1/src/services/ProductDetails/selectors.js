// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
const selectProductDetailsContainer = state => state.containers.productDetailsReducer;
const selectProductDetails = state => selectProductDetailsContainer(state).get('productData');
const selectProductCount = state => selectProductDetailsContainer(state).get('productCount');
const selectProductLoading = state => selectProductDetailsContainer(state).get('productDetailsDataLoading');
const selectProductSaved = state => selectProductDetailsContainer(state).get('productSaved');



export { selectProductDetailsContainer, selectProductDetails, selectProductCount,selectProductLoading,selectProductSaved };