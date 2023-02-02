import React, { useEffect, useState,useContext } from 'react';
import {MyContext} from './../../../contexts/MyContext';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from './../../../actions/cartActions';
import { Link,useLocation,useNavigate} from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';
import Navbar from '../NavBar/';
import Footer from "./../Footer";
import Header from '../NavBar/Header';

function ShippingScreen(props) {

    const location = useLocation();
    const navigate = useNavigate();

  const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
  
  if (!isAuth) {
   navigate('/signin?redirect=/shipping');
  }
  

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    navigate('/payment');
  }
  return (
    <React.Fragment>
    <Navbar />
    <Header />
<div className="checkout-wrappper">
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form-wrapper">
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Delivery Details</h2>
          </li>
          <div className="input-container">
          <li>
            <label htmlFor="address">
              Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
           
          </li>
          <li>
            <label htmlFor="city">
              City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>            
          </li>
          <li>
            <label htmlFor="postalCode">
              Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
          </li>
          <li>
            <label htmlFor="country">
              Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        
          </li>

</div>
          <li>
            <button type="submit" className="submit-button"> <i class="fa fa-arrow-right icon-cart"></i>Continue</button>
          </li>

        </ul>
      </form>
    </div>
    </div>
  </div>
  <Footer />
    </React.Fragment>
  );
}
export default ShippingScreen;