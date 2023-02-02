import React, { useEffect, useState } from 'react';
import { Link,useLocation,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from './../../../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import Navbar from '../NavBar/';
import Footer from "./../Footer";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('PayStack');
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    navigate('/placeorder');
  };
  return (
    
        <React.Fragment>
        <Navbar />
        <div className="checkout-wrappper">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form-wrappper">
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment Method</h2>
            </li>
            <div className="input-container">
            <li>
              <br />
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="PayStack"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>

                <label for="paymentMethod">Paystack</label>
              </div>
            </li>
</div>
            <li>
              <button type="submit" className="signin-button"> <i class="fa fa-arrow-right icon-cart"></i>
                Continue
              </button>
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
export default PaymentScreen;
