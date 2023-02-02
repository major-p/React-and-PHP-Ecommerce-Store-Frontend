import Axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM,  CART_ADD_ITEM_FAIL,
  CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "./../constants/cartConstants";


const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`http://localhost/shopfair/public/restapi/products/cartproducts.php?id=${productId}`);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data.id,
        name: data.name,
        image: data.imageOne,
        price: data.price,
        countInStock: data.countInStock,
        shippingfee:data.shippingfee,
        seller: data.seller,
        shop:data.shopName,
        qty
      }
    });
    
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
    

  } catch (error) {

  }
}


const removeFromCart = (productId) => (dispatch, getState) => {
dispatch({ type: CART_REMOVE_ITEM, payload: productId });
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


  const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));

  }
  const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
  }
  export { addToCart, removeFromCart, saveShipping, savePayment }

