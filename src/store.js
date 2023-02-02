
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
  productCategoryListReducer,
  FeaturedProductListReducer,
  AllProductListReducer,
   latestProductListReducer, 
   RelatedProductListReducer, 
   SimilarProductListReducer, 
   MostViewedProductListReducer, 
   RelatedBrandListReducer, 
   RatingListReducer, 
   CategoryOneProductListReducer,
   CategoryTwoProductListReducer,
   CategoryThreeProductListReducer,
   CategoryFourProductListReducer, 
   productDetailsReducer,
    productListReducer} from './reducers/productReducers';
import {
    userSigninReducer,
    userRegisterReducer,
    userUpdateReducer,
  } from './reducers/userReducers';



const initialState = {
 
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
        shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
        paymentMethod: 'PayStack',
      },
    

};

const reducer = combineReducers({
  productCategoryList: productCategoryListReducer,
    productList: productListReducer,
    AllProductList: AllProductListReducer,
    LatestProductList: latestProductListReducer,
    FeaturedProductList: FeaturedProductListReducer,
    RelatedProductList: RelatedProductListReducer,
    SimilarProductList: SimilarProductListReducer,
    MostViewedProductList: MostViewedProductListReducer,
    RelatedBrandList: RelatedBrandListReducer,
    RatingList: RatingListReducer,
    CategoryOneProductList: CategoryOneProductListReducer,
    CategoryTwoProductList: CategoryTwoProductListReducer,
    CategoryThreeProductList: CategoryThreeProductListReducer,
    CategoryFourProductList: CategoryFourProductListReducer,

    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;