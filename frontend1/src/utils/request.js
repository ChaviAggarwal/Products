// graphqlRequest.js

import { productDetails } from '../services/ProductDetails/constants';


/*****************************************************************
 *  fetchProducts: 	 fetchProducts()
 * Description : This is gql query which fetches produscts from database
*
******************************************************************/

export const fetchProducts = async () => {

  const GET_PRODUCTS = {
    query: `  
        query {
          getProducts{
          id
          name
          price
      }
  }
  `
  };
  try {
    const response = await fetch(`${productDetails.PRODUCT_DETAILS_URL}`, {
      method: 'POST',
      body: JSON.stringify(GET_PRODUCTS),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const result = await response.json();
    return { result: result.data.getProducts };
  }
  catch (error) {
    return { error };
  }
}


/*****************************************************************
 *  fetchProducts: 	 fetchProducts()
 * Description : This is gql query which saves products in database
*
******************************************************************/

export const saveProducts = async (data) => {

  const SAVE_PRODUCT = {
    query: `  
    mutation {
      createProduct(name:"${data.name}",price:${data.price}){
      id
      name
      price
  }
}
`
  };
  try {
    const response = await fetch(`${productDetails.PRODUCT_DETAILS_URL}`, {
      method: 'POST',
      body: JSON.stringify(SAVE_PRODUCT),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const result = await response.json();
    return { result: result.data.createProduct };
  }
  catch (error) {
    return { error };
  }
}