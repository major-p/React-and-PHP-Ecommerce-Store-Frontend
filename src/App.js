import React,{Fragment} from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import MyContextProvider from './contexts/MyContext';

import './components/css/animations.css';
import './components/css/main.css';
import './components/css/slider.css';

import './components/css/lightMode.css';
import './components/css/darkMode.css';

import "./components/css/desktopStyles.css";
import "./components/css/mobileStyles.css";
import './components/css/forms.css';
import RegisterScreen from './components/screens/Auth/Register';
import SigninScreen from './components/screens/Auth/Login';
import ProductDetails from './components/screens/Products/ProductDetails';
import CartScreen from './components/screens/Cart';
import SearchScreen from './components/screens/Products/SearchScreen';
import ShippingScreen from './components/screens/Checkout/ShippingScreen';
import PaymentScreen from './components/screens/Checkout/Payment';
import PlaceOrderScreen from './components/screens/Checkout/PlaceOrder';

function App() {
  return (
    <MyContextProvider> 
    <Fragment>

      <BrowserRouter>
        
        <Routes>
   <Route path="/" element={ <MainPage />} />
   <Route path="/signup" element={ <RegisterScreen />} />
   <Route path="/signin" element={ <SigninScreen />} />

   <Route path="/product/:id" element={ <ProductDetails />} />

   <Route path="/cart" element={<CartScreen />} />
   <Route path="/cart/:id" element={<CartScreen />} />

   <Route path="/catalog" element={<SearchScreen />} />
   <Route  path="/catalog/name/:name" element={<SearchScreen />}  />
   <Route path="/catalog/category/:category/name/:name" element={<SearchScreen />}     />                   
   <Route  path="/catalog/category/:category" element={<SearchScreen />}      />
   <Route
    path="/catalog/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
    element={<SearchScreen />}    />

<Route path="/shipping" element={ <ShippingScreen />} />
<Route path="/payment" element={ <PaymentScreen />} />
<Route path="/placeorder" element={ <PlaceOrderScreen />} />

   <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Routes>
       
      </BrowserRouter>

    </Fragment>
    </MyContextProvider>
  );
}

export default App;
