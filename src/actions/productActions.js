
import axios from "axios";
import Axios from 'axios';

import {
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_FAIL,
     PRODUCT_LIST_SUCCESS,

     PRODUCT_LIST_FOOD_REQUEST,
     PRODUCT_LIST_FOOD_FAIL,
     PRODUCT_LIST_FOOD_SUCCESS,

     ALLPRODUCT_LIST_REQUEST,
     ALLPRODUCT_LIST_FAIL,
     ALLPRODUCT_LIST_SUCCESS,

     FEATUREDPRODUCT_LIST_REQUEST,
     FEATUREDPRODUCT_LIST_FAIL,
     FEATUREDPRODUCT_LIST_SUCCESS,

     RELATEDPRODUCT_LIST_REQUEST,
     RELATEDPRODUCT_LIST_FAIL,
     RELATEDPRODUCT_LIST_SUCCESS,

     RELATEDBRAND_LIST_REQUEST,
     RELATEDBRAND_LIST_FAIL,
     RELATEDBRAND_LIST_SUCCESS,

     SIMILARPRODUCT_LIST_REQUEST,
     SIMILARPRODUCT_LIST_FAIL,
     SIMILARPRODUCT_LIST_SUCCESS,

     MOSTVIEWEDPRODUCT_LIST_FAIL, 
    MOSTVIEWEDPRODUCT_LIST_REQUEST,
    MOSTVIEWEDPRODUCT_LIST_SUCCESS,


     LATESTPRODUCT_LIST_FAIL, 
     LATESTPRODUCT_LIST_REQUEST,
     LATESTPRODUCT_LIST_SUCCESS,

     RATING_LIST_FAIL, 
     RATING_LIST_REQUEST,
     RATING_LIST_SUCCESS,
    
    CATEGORYONEPRODUCT_LIST_FAIL, 
    CATEGORYONEPRODUCT_LIST_REQUEST,
    CATEGORYONEPRODUCT_LIST_SUCCESS,

    CATEGORYTWOPRODUCT_LIST_FAIL, 
    CATEGORYTWOPRODUCT_LIST_REQUEST,
    CATEGORYTWOPRODUCT_LIST_SUCCESS,

    CATEGORYTHREEPRODUCT_LIST_FAIL, 
    CATEGORYTHREEPRODUCT_LIST_REQUEST,
    CATEGORYTHREEPRODUCT_LIST_SUCCESS,

    CATEGORYFOURPRODUCT_LIST_FAIL, 
    CATEGORYFOURPRODUCT_LIST_REQUEST,
    CATEGORYFOURPRODUCT_LIST_SUCCESS,

     FOOD_ALLPRODUCT_LIST_REQUEST,
     FOOD_ALLPRODUCT_LIST_FAIL,
     FOOD_ALLPRODUCT_LIST_SUCCESS,

     FOOD_FEATUREDPRODUCT_LIST_REQUEST,
     FOOD_FEATUREDPRODUCT_LIST_FAIL,
     FOOD_FEATUREDPRODUCT_LIST_SUCCESS,

     FOOD_LATESTPRODUCT_LIST_FAIL, 
     FOOD_LATESTPRODUCT_LIST_REQUEST,
     FOOD_LATESTPRODUCT_LIST_SUCCESS,

     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAIL,

  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_FAIL,
  
  PRODUCT_CATEGORY_LIST_FOOD_SUCCESS,
  PRODUCT_CATEGORY_LIST_FOOD_REQUEST,
  PRODUCT_CATEGORY_LIST_FOOD_FAIL,

  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_LIST_REQUEST,
  PRODUCT_REVIEW_LIST_SUCCESS,
  PRODUCT_REVIEW_LIST_FAIL,
     
     } from "../constants/productConstants";


      const listProducts = ({
      pageNumber = '',
      name = '',
      category = '',
      order = '',
      min = 0,
      max = 0,
      rating = 0,
    }) => async (dispatch) => {
      dispatch({
        type: PRODUCT_LIST_REQUEST,
      });
      try {
        const { data } = await Axios.get(
`http://localhost/shopfair/public/restapi/products/products.php?pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
    };
    

    
    const listProductsfood = ({
      pageNumber = '',
      name = '',
      category = '',
      order = '',
      min = 0,
      max = 0,
      rating = 0,
    }) => async (dispatch) => {
      dispatch({
        type: PRODUCT_LIST_FOOD_REQUEST,
      });
      try {
        const { data } = await Axios.get(
`http://localhost/restapi/food/products.php?pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
        );
        dispatch({ type: PRODUCT_LIST_FOOD_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FOOD_FAIL, payload: error.message });
      }
    };
    
  const listAllProducts = () => async (dispatch) => {
    try {
      dispatch({ type: ALLPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/shopfair/restapi/allproducts.php');
      dispatch({ type: ALLPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ALLPRODUCT_LIST_FAIL, payload: error.message });
    }
  };
  const listFeaturedProducts = () => async (dispatch) => {
    try {
      dispatch({ type: FEATUREDPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/shopfair/public/restapi/products/featuredproducts.php');
      dispatch({ type: FEATUREDPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FEATUREDPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const listLatestProducts = () => async (dispatch) => {
    try {
      dispatch({ type: LATESTPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/shopfair/public/restapi/products/latestproducts.php');
      dispatch({ type: LATESTPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LATESTPRODUCT_LIST_FAIL, payload: error.message });
    }
  };


  const FoodlistAllProducts = () => async (dispatch) => {
    try {
      dispatch({ type: FOOD_ALLPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/restapi/food/allproducts.php');
      dispatch({ type: FOOD_ALLPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FOOD_ALLPRODUCT_LIST_FAIL, payload: error.message });
    }
  };
  const FoodlistFeaturedProducts = () => async (dispatch) => {
    try {
      dispatch({ type: FOOD_FEATUREDPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/restapi/food/featuredproducts.php');
      dispatch({ type: FOOD_FEATUREDPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FOOD_FEATUREDPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const FoodlistLatestProducts = () => async (dispatch) => {
    try {
      dispatch({ type: FOOD_LATESTPRODUCT_LIST_REQUEST });
      const { data } = await axios.get('http://localhost/restapi/food/latestproducts.php');
      dispatch({ type: FOOD_LATESTPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FOOD_LATESTPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  
  
  const listRelatedProducts = (cid) => async (dispatch) => {
    try {
      dispatch({ type: RELATEDPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/relatedproducts.php?cid=${cid}`);
      dispatch({ type: RELATEDPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RELATEDPRODUCT_LIST_FAIL, payload: error.message });
    }
  };
   
  const listRelatedBrands = (bid) => async (dispatch) => {
    try {
      dispatch({ type: RELATEDBRAND_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/relatedbrands.php?bid=${bid}`);
      dispatch({ type: RELATEDBRAND_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RELATEDBRAND_LIST_FAIL, payload: error.message });
    }
  };

  const listSimilarProducts = (sid) => async (dispatch) => {
    try {
      dispatch({ type: SIMILARPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/similarproducts.php?sid=${sid}`);
      dispatch({ type: SIMILARPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SIMILARPRODUCT_LIST_FAIL, payload: error.message });
    }
  };
    
  const listMostViewedProducts = () => async (dispatch) => {
    try {
      dispatch({ type: MOSTVIEWEDPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/mostviewedproducts.php`);
      dispatch({ type: MOSTVIEWEDPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: MOSTVIEWEDPRODUCT_LIST_FAIL, payload: error.message });
    }
  };
    

  const listRatings = (productId) => async (dispatch) => {
    try {
      dispatch({ type: RATING_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/rating.php?pid=${productId}`);
      dispatch({ type: RATING_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RATING_LIST_FAIL, payload: error.message });
    }
  };
     

  const listCategoryOneProducts = () => async (dispatch) => {
    try {
      dispatch({ type: CATEGORYONEPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/categoryone.php`);
      dispatch({ type: CATEGORYONEPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CATEGORYONEPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const listCategoryTwoProducts = () => async (dispatch) => {
    try {
      dispatch({ type: CATEGORYTWOPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/categorytwo.php`);
      dispatch({ type: CATEGORYTWOPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CATEGORYTWOPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const listCategoryThreeProducts = () => async (dispatch) => {
    try {
      dispatch({ type: CATEGORYTHREEPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/categorythree.php`);
      dispatch({ type: CATEGORYTHREEPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CATEGORYTHREEPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const listCategoryFourProducts = () => async (dispatch) => {
    try {
      dispatch({ type: CATEGORYFOURPRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/shopfair/public/restapi/products/categoryfour.php`);
      dispatch({ type: CATEGORYFOURPRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CATEGORYFOURPRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  const detailsProduct = (productId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST});
      const { data } = await  axios.get(`http://localhost/shopfair/public/restapi/products.php?id=${productId}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
  };

  
export const listProductCategories = () => async (dispatch) => {
  try {
  dispatch({type: PRODUCT_CATEGORY_LIST_REQUEST,});
    const { data } = await Axios.get(`http://localhost/shopfair/public/restapi/categories.php`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
}; 


export const listProductCategoriesFood = () => async (dispatch) => {
  try {
  dispatch({type: PRODUCT_CATEGORY_LIST_FOOD_REQUEST,});
    const { data } = await Axios.get(`http://localhost/restapi/food/categories.php`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_FOOD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FOOD_FAIL, payload: error.message });
  }
}; 
export const listProductReviews = (productId) => async (dispatch) => {
  try {
  dispatch({type: PRODUCT_REVIEW_LIST_REQUEST,});
    const { data } = await Axios.get(`http://localhost/restapi/reviews.php?id=${productId}`);
    dispatch({ type: PRODUCT_REVIEW_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_REVIEW_LIST_FAIL, payload: error.message });
  }
};
  



const createReview = (productId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
  const loginToken = localStorage.getItem('loginToken');
  const {
    userSignin: { theUser },
  } = getState();
  try {
    const { data } = await Axios.post(
      `http://localhost/restapi/reviews.php/${productId}`,
      review,
      {
        headers: { Authorization: 'bearer '+loginToken },
      }
    );
    dispatch({
      type: PRODUCT_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
  }
};

export {
    listProducts,
    listProductsfood,
    listAllProducts,
    listFeaturedProducts,
    listLatestProducts,
    listRelatedProducts,
    listRelatedBrands,
    listSimilarProducts,
    listMostViewedProducts,
    listRatings,
    listCategoryOneProducts,
    listCategoryTwoProducts,
    listCategoryThreeProducts,
    listCategoryFourProducts,
    FoodlistAllProducts,
    FoodlistFeaturedProducts,
    FoodlistLatestProducts,
    detailsProduct,
    createReview
    
   
}
