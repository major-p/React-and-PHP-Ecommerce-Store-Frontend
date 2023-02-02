import React, {useContext, useState, useEffect} from 'react'
import { Link ,useNavigate,useLocation,useMatch } from 'react-router-dom';
import {MyContext} from './../../../contexts/MyContext';

import Navbar from '../NavBar/';
import Footer from "./../Footer";

function SigninScreen(props) {

    const navigate=useNavigate();
    const location =useLocation();
    const match =useMatch("/");

  const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message,
                
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="signin-error-message">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="signin-success-message">{state.successMsg}</div>;
    }
    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    const redirect = location.search ? location.search.split("=")[1] : '/';


    useEffect(() => {
      if (isAuth) {
          
        navigate(redirect);
      }
      return () => {
        //
      };
    }, [isAuth]);
  
  

   
  return (
  <React.Fragment>
  <Navbar />
  <div className="form-wrapper">
   <div className="form">
 
    <form  onSubmit={submitForm} noValidate>
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
       
                    {errorMsg}
          {successMsg}
   
        </li>
        <div className="input-container">
        <li>
          <input name="email" type="email" required placeholder="Enter your email address" 
          value={state.userInfo.email} onChange={onChangeValue} />
        </li>
        <li>
          <input name="password" type="password" required placeholder="Enter your password"
           value={state.userInfo.password} onChange={onChangeValue} />
        </li>
        </div>
        <li>
          <button type="submit" className="submit-button">Signin</button>
        </li>
       
        <div className="bottom">
        <li>
          New to ShopFair?
        </li>
        <li>
          <Link to="/signup" className="bottom-button" >Create An Account</Link>
        </li>
        </div>
      </ul>
    </form>
  </div>

</div>
  <Footer />
    </React.Fragment>
  );
}
export default SigninScreen;