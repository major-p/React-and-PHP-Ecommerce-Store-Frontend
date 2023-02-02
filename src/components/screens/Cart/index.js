import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from './../../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation,useNavigate} from 'react-router-dom';
import Navbar from '../NavBar/';
import Footer from "./../Footer";
import Header from '../NavBar/Header';
import ScrollingText from '../Carousel/ScrollingText';
import { ErrorBoundary } from "react-error-boundary";
import Error from '../../ErrorBoundary';
import MostViewedProductList from '../Products/MostViewedProducts';

function CartScreen(props) {

    let params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

  const productId = params.id;
  const cart = useSelector(state => state.cart);
  const { cartItems, error } = cart;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');

  }
  

  return (
  <React.Fragment>
      <Navbar />
      <Header />
      <div className='clearfix'> 
      <h3>Your Cart</h3></div>

      <div className='main'>
     <div className="cart-header">
     <Link to="/" className="continue-shopping">
      <h5>  <i className="fa fa-arrow-left "></i> Continue Shopping  {error && {error}}</h5>
      </Link>
     
     

     </div>
                 <div className='cart-container'>
                <div className='cart-container-right'>
                <ErrorBoundary FallbackComponent={Error}>
    <MostViewedProductList   />
    </ErrorBoundary> 
                </div>
                <div className="cart-container-middle">
                  Advertisment
                   </div>       
                     <div className="cart-container-left">

    {
          cartItems.length === 0 ?
            <div className="empty-cart">
             <h4> Your Cart is empty </h4>
              
              <Link to="/" className='submit-button go-shopping'>Go Shopping</Link>
          </div>
            : 
            cartItems.map(item =>
              <div className="cart-items-wrap"  key={item.product}>
            <div className='cart-list-left'>
            <Link to={'/product/' + item.product} className="default-link" > 

  <img   src={'../admin/uploads/' + item.image} alt="product"  />
  </Link>

            </div>
            <div className='cart-list-right'>
            <Link to={"/product/" + item.product}>
    <div className="cart-name">
     
     <h4 className='item-name'> {item.name}</h4>
    </div>
    </Link>

    <div className="cart-quantity">
   <h4>Quantity</h4>
    <input className='cart-qty' type="number" min="1" max={item.countInStock} step="1" 
                     value={item.qty}
                     onChange={(e) =>
                     dispatch(
                     addToCart(item.product, Number(e.target.value))
                     )
                    }
                           />
    </div>
    <div className="cart-price">
    <h4>Unit Price:</h4>
    <h4>&#8358;{item.price}</h4>
    </div>
    <div className="cart-price">
    <h4>Total Price:</h4>
    <h4>&#8358;{item.price * item.qty}</h4>
    </div>
    <div className="remove-cart">      
    <h4>Remove</h4>
    <h4 onClick={() => removeFromCartHandler(item.product)}><i className="fa fa-trash remove-icon"></i></h4>
    </div>
            </div>


              </div>


            )
        }
       

    
    </div>
    </div>
    <div className="cart-action">
    <h4>Order Summary </h4> 
<div className='cart-action-bottom'>

<div className="total-items">
    <h5>Total Items:</h5>
      <h5> {cartItems.reduce((a, c) => a + c.qty * 1 , 0)} item(s)</h5>
</div>
<div className="total-items">
    <h5> Total: </h5>
<h5>&#8358;{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h5> 
</div>
    
     <button onClick={checkoutHandler} className=" submit-button checkout-button"
      disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

</div>
     
<div className="credit-cards">
  we accept
</div>
</div>
</div>
    <Footer />
    </React.Fragment>
  );
}

export default CartScreen;