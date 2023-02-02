import { 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,

    PRODUCT_LIST_FOOD_FAIL, 
    PRODUCT_LIST_FOOD_REQUEST,
    PRODUCT_LIST_FOOD_SUCCESS,

    ALLPRODUCT_LIST_FAIL, 
    ALLPRODUCT_LIST_REQUEST,
    ALLPRODUCT_LIST_SUCCESS,

    LATESTPRODUCT_LIST_FAIL, 
    LATESTPRODUCT_LIST_REQUEST,
    LATESTPRODUCT_LIST_SUCCESS,

    RELATEDPRODUCT_LIST_FAIL, 
    RELATEDPRODUCT_LIST_REQUEST,
    RELATEDPRODUCT_LIST_SUCCESS,
    
    RELATEDBRAND_LIST_FAIL, 
    RELATEDBRAND_LIST_REQUEST,
    RELATEDBRAND_LIST_SUCCESS,

    SIMILARPRODUCT_LIST_FAIL, 
    SIMILARPRODUCT_LIST_REQUEST,
    SIMILARPRODUCT_LIST_SUCCESS,

    MOSTVIEWEDPRODUCT_LIST_FAIL, 
    MOSTVIEWEDPRODUCT_LIST_REQUEST,
    MOSTVIEWEDPRODUCT_LIST_SUCCESS,

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

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    FEATUREDPRODUCT_LIST_FAIL,
    FEATUREDPRODUCT_LIST_SUCCESS,
    FEATUREDPRODUCT_LIST_REQUEST,

    FO0D_ALLPRODUCT_LIST_FAIL, 
    FOOD_ALLPRODUCT_LIST_REQUEST,
    FOOD_ALLPRODUCT_LIST_SUCCESS,

    FOOD_LATESTPRODUCT_LIST_FAIL, 
    FOOD_LATESTPRODUCT_LIST_REQUEST,
    FOOD_LATESTPRODUCT_LIST_SUCCESS,

    FOOD_FEATUREDPRODUCT_LIST_FAIL,
    FOOD_FEATUREDPRODUCT_LIST_SUCCESS,
    FOOD_FEATUREDPRODUCT_LIST_REQUEST,

    PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL
  ,
  PRODUCT_CATEGORY_LIST_FOOD_REQUEST,
  PRODUCT_CATEGORY_LIST_FOOD_SUCCESS,
  PRODUCT_CATEGORY_LIST_FOOD_FAIL,

  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_RESET,
  PRODUCT_REVIEW_LIST_SUCCESS,
  PRODUCT_REVIEW_LIST_FAIL,
  PRODUCT_REVIEW_LIST_REQUEST,

    } from "../constants/productConstants";


function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function productListFoodReducer(state = { products: [] }, action) {
    switch (action.type) {
      case PRODUCT_LIST_FOOD_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_FOOD_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FOOD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function AllProductListReducer(state = { allproducts: [] }, action) {
    switch (action.type) {
      case LATESTPRODUCT_LIST_REQUEST:
        return { loading: true, allproducts: [] };
      case LATESTPRODUCT_LIST_SUCCESS:
        return { loading: false, allproducts: action.payload };
      case LATESTPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
    function FeaturedProductListReducer(state = { featuredproducts: [] }, action) {
      switch (action.type) {
        case FEATUREDPRODUCT_LIST_REQUEST:
          return { loading: true, featuredproducts: [] };
        case FEATUREDPRODUCT_LIST_SUCCESS:
          return { loading: false, featuredproducts: action.payload };
        case FEATUREDPRODUCT_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
  }
  function latestProductListReducer(state = { lproducts: [] }, action) {
    switch (action.type) {
      case LATESTPRODUCT_LIST_REQUEST:
        return { loading: true, lproducts: [] };
      case LATESTPRODUCT_LIST_SUCCESS:
        return { loading: false, lproducts: action.payload };
      case LATESTPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function RelatedProductListReducer(state = { rproducts: [] }, action) {
    switch (action.type) {
      case RELATEDPRODUCT_LIST_REQUEST:
        return { loading: true, rproducts: [] };
      case RELATEDPRODUCT_LIST_SUCCESS:
        return { loading: false, rproducts: action.payload };
      case RELATEDPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function RelatedBrandListReducer(state = { rbproducts: [] }, action) {
    switch (action.type) {
      case RELATEDBRAND_LIST_REQUEST:
        return { loading: true, rbproducts: [] };
      case RELATEDBRAND_LIST_SUCCESS:
        return { loading: false, rbproducts: action.payload };
      case RELATEDBRAND_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function SimilarProductListReducer(state = { sproducts: [] }, action) {
    switch (action.type) {
      case SIMILARPRODUCT_LIST_REQUEST:
        return { loading: true, sproducts: [] };
      case SIMILARPRODUCT_LIST_SUCCESS:
        return { loading: false, sproducts: action.payload };
      case SIMILARPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }


  function MostViewedProductListReducer(state = { mproducts: [] }, action) {
    switch (action.type) {
      case MOSTVIEWEDPRODUCT_LIST_REQUEST:
        return { loading: true, mproducts: [] };
      case MOSTVIEWEDPRODUCT_LIST_SUCCESS:
        return { loading: false, mproducts: action.payload };
      case MOSTVIEWEDPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }


  function RatingListReducer(state = { rating: [] }, action) {
    switch (action.type) {
      case RATING_LIST_REQUEST:
        return { loading: true, rating: [] };
      case RATING_LIST_SUCCESS:
        return { loading: false, rating: action.payload };
      case RATING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function CategoryOneProductListReducer(state = { c1products: [] }, action) {
    switch (action.type) {
      case CATEGORYONEPRODUCT_LIST_REQUEST:
        return { loading: true, c1products: [] };
      case CATEGORYONEPRODUCT_LIST_SUCCESS:
        return { loading: false, c1products: action.payload };
      case CATEGORYONEPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function CategoryTwoProductListReducer(state = { c2products: [] }, action) {
    switch (action.type) {
      case CATEGORYTWOPRODUCT_LIST_REQUEST:
        return { loading: true, c2products: [] };
      case CATEGORYTWOPRODUCT_LIST_SUCCESS:
        return { loading: false, c2products: action.payload };
      case CATEGORYTWOPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function CategoryThreeProductListReducer(state = { c3products: [] }, action) {
    switch (action.type) {
      case CATEGORYTHREEPRODUCT_LIST_REQUEST:
        return { loading: true, c3products: [] };
      case CATEGORYTHREEPRODUCT_LIST_SUCCESS:
        return { loading: false, c3products: action.payload };
      case CATEGORYTHREEPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function CategoryFourProductListReducer(state = { c4products: [] }, action) {
    switch (action.type) {
      case CATEGORYFOURPRODUCT_LIST_REQUEST:
        return { loading: true, c4products: [] };
      case CATEGORYFOURPRODUCT_LIST_SUCCESS:
        return { loading: false, c4products: action.payload };
      case CATEGORYFOURPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function FoodAllProductListReducer(state = { foodallproducts: [] }, action) {
    switch (action.type) {
      case FOOD_LATESTPRODUCT_LIST_REQUEST:
        return { loading: true, foodallproducts: [] };
      case FOOD_LATESTPRODUCT_LIST_SUCCESS:
        return { loading: false, foodallproducts: action.payload };
      case FOOD_LATESTPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
    function FoodFeaturedProductListReducer(state = { foodfeaturedproducts: [] }, action) {
      switch (action.type) {
        case FOOD_FEATUREDPRODUCT_LIST_REQUEST:
          return { loading: true, foodfeaturedproducts: [] };
        case FOOD_FEATUREDPRODUCT_LIST_SUCCESS:
          return { loading: false, foodfeaturedproducts: action.payload };
        case FOOD_FEATUREDPRODUCT_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
  }
  function FoodlatestProductListReducer(state = { foodlproducts: [] }, action) {
    switch (action.type) {
      case FOOD_LATESTPRODUCT_LIST_REQUEST:
        return { loading: true, foodlproducts: [] };
      case FOOD_LATESTPRODUCT_LIST_SUCCESS:
        return { loading: false, foodlproducts: action.payload };
      case FOOD_LATESTPRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function productDetailsReducer(state = { product: { reviews: [] } }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export const productCategoryListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCategoryListFoodReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_FOOD_REQUEST:
      return { loading: true };
    case PRODUCT_CATEGORY_LIST_FOOD_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUCT_CATEGORY_LIST_FOOD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const productReviewListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_REVIEW_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_LIST_SUCCESS:
      return { loading: false, reviews: action.payload };
    case PRODUCT_REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case PRODUCT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};


export  {
    productListReducer,
    productListFoodReducer,
    AllProductListReducer,
    productDetailsReducer,
    FeaturedProductListReducer,
    RelatedProductListReducer,
    RelatedBrandListReducer,
    SimilarProductListReducer,
    MostViewedProductListReducer,
    RatingListReducer,
    CategoryOneProductListReducer,
    CategoryTwoProductListReducer,
    CategoryThreeProductListReducer,
    CategoryFourProductListReducer,
    latestProductListReducer,
    FoodAllProductListReducer,
    FoodFeaturedProductListReducer,
    FoodlatestProductListReducer
}
