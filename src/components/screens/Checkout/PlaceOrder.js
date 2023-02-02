import React, { useEffect,useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useLocation,useNavigate} from 'react-router-dom';
import {MyContext} from '../../../contexts/MyContext';
import CheckoutSteps from './CheckoutSteps';
import { createOrder } from './../../../actions/orderActions';
import Navbar from '../NavBar/';
import Footer from "./../Footer";

function PlaceOrderScreen(props) {

  const location = useLocation();
  const navigate = useNavigate();

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
    
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
      
    };
    
  return (
  
    <React.Fragment>
    <Navbar />
    <div className="place-order-wrappper">
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
  
    <div className="placeorder">
      
      <div className='placeorder-left'>
      <h3>Your Shopping Cart Items </h3>
          <ul className="cart-list-container">
           
            {
              cart.cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cart.cartItems.map(item =>
                 
                   
                  <li>
                   <div className="cart-items-wrapper">

                      <div className="cart-items-wrapper-left">
                    <div className="cart-image">
                      <img src={'../admin/uploads/' + item.image} alt="product" />
                    </div>
                  
                 </div>
                 <div className="cart-items-wrapper-right">

                    <div className="cart-name-order">
                    <Link to={"/product/" + item.product}>
                         {item.name}
                        </Link>
                      </div>
                        
                      <div className="cart-qty-wrap">
                       <h4> Quantity:</h4> 
                       <h4>{item.qty}</h4>
                      </div>

                      <div className="cart-price">
                    <h4>Unit Price:</h4> 
                    <h4> &#8358;{item.price} </h4>
                    </div>     
                     
                     </div>
                    
                    </div>
                  </li>
                 
                )
            }
          </ul>

         <div className='placeorder-info-wrapper'>
         <h3>Payment & Delivery Details</h3>

          <div className="payment-method">
            <h4>Payment Method:</h4> 
           <h4> {cart.payment.paymentMethod}</h4>
        </div>
       
        <div className='delivery-details'>
        
          <div >
            <ul className="cart-order-details">
              <li>
              <h4>Address:</h4> 
              <h4>{cart.shipping.address}, {cart.shipping.city}. </h4>
              </li>
              <li>
                <h4>Postal Code:</h4> 
              <h4>{cart.shipping.postalCode}.</h4>       
              </li>
              <li>
                <h4>Country: </h4>
                <h4>{cart.shipping.country}</h4>  
                </li>
            </ul>
          </div>
        </div>

         </div>

        </div>

        <div className='placeorder-right'>

right div for adveretisement
</div>


</div>    

      <div className="order-action">
      <h4>Order Summary</h4>
      <div className="subtotal">
      
      <h3>Items:</h3>
      <h3>&#8358;{cart.itemsPrice.toFixed(2)}</h3>     
    
    </div>
    <div className="subtotal">
        <h3>Shipping:</h3>
        <h3>&#8358;{cart.shippingPrice.toFixed(2)}</h3>     
      </div>
      <div className="subtotal">

      <h3>   Tax:</h3> 
             <h3>&#8358;{cart.taxPrice.toFixed(2)}</h3>     
</div>
      <div className="subtotal total">

      <h3> 
       Total:</h3>
        <h3>&#8358;{cart.totalPrice.toFixed(2)}</h3>     
    
      
      </div>
     
      
       <button className="submit-button order-button"onClick={placeOrderHandler} >
         Place Order
        </button>       
  </div>


     

    
  </div>
  <Footer />
    </React.Fragment>
  );
}

export default PlaceOrderScreen;