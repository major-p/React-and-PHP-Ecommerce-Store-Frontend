import React, {Component,useState,useContext} from 'react'
import {Link, Route,useHistory } from 'react-router-dom';
import useDarkMode from 'use-dark-mode'
import {MyContext} from './../../../contexts/MyContext';
import { useSelector } from 'react-redux';
import SearchBox from '../Products/SearchBox';
import darkUser from './../../images/icons/user-black.svg'
import lightUser from './../../images/icons/user-white.svg'
import darkCart from './../../images/icons/cart-black.svg'
import lightCart from './../../images/icons/cart-white.svg'
import moon from './../../images/icons/moon.svg'
import sun from './../../images/icons/sun.svg'
import logo from './../../images/logo/logo.svg';

function NavBar() {

    const { value, toggle } = useDarkMode(false);

    const cart = useSelector((state) => state.cart);
    
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);


    const { cartItems } = cart;
    
      const {rootState,logoutUser} = useContext(MyContext);
      const {isAuth,theUser,showLogin} = rootState;
     
    // If user Logged in
    if(isAuth)
    {
  return (
    <div className="main-nav-container">

    <div className="nav-container">

    <div className="nav-left">
    <div className='logo'>
    <Link to="/">
   <img src={logo} />
   </Link>
</div>
    </div>
    
    <div className='nav-center'>
            <SearchBox></SearchBox>
    </div>
    <div className='nav-right'>
    
     <ul className='nav-list'>

    <li className="dropdown">
    <img src ={darkUser} className='dark-images dropbt' />
     <img src ={lightUser} className='light-images dropbt'/>

<div className="dropdown-menu">
    <div className='dropdown-wrapper'>
    
    <Link to="/profile">
    {theUser.name}
    </Link>
<h5 onClick={logoutUser} className=""> Logout </h5>
 </div>
 </div>
        </li>
    <li>   
    <Link className="cart-button"  to="/cart">

     <img src ={darkCart} className='light-images' style={{width:`28px`,marginLeft:`10px`}} />
     <img src ={lightCart} className='dark-images' style={{width:`28px`,marginLeft:`10px`}} />
<span className="badge">{cartItems.length > 0 && (
         <span className=" badge">{cartItems.length}</span>
        )}
</span>
</Link>
          </li>
    <li className=''> 
        <button type='button' onClick={toggle} className='button mode-button light'>
        {value ?
            <img src ={sun} className=''/>
             : 
             <img src ={moon} className=''/>
             }
        </button>
        </li>

       
     </ul>
    </div>
    
        </div>
</div>    
    )
}
// Show for unathorized users User is not Logged in

else{
    return (
        <div className="main-nav-container">

        <div className="nav-container">

        <div className="nav-left">
        <div className='logo'>
        <Link to="/">
       <img src={logo} />
       </Link>
    </div>
        </div>
        
        <div className='nav-center'>
                <SearchBox></SearchBox>
        </div>
        <div className='nav-right'>
        
         <ul className='nav-list'>
        
        <li className="dropdown">
        <img src ={darkUser} className='dark-images dropbt' />
         <img src ={lightUser} className='light-images dropbt'/>

    <div className="dropdown-menu">
        <div className='dropdown-wrapper'>
        <Link to="/signin" className='drop-link'>
   Login
    </Link>

    <Link to="/signup" className='drop-link'>
   Register
    </Link>
        </div>
  
    </div>



            </li>
        <li>   
        <Link className="cart-button"  to="/cart">
    
         <img src ={darkCart} className='light-images' style={{width:`28px`,marginLeft:`10px`}} />
         <img src ={lightCart} className='dark-images' style={{width:`28px`,marginLeft:`10px`}} />
    <span className="badge">{cartItems.length > 0 && (
             <span className="badge">{cartItems.length}</span>
            )}
    </span>
    </Link>
              </li>
        <li className=''> 
            <button type='button' onClick={toggle} className='button mode-button light'>
            {value ?
                <img src ={sun} className=''/>
                 : 
                 <img src ={moon} className=''/>
                 }
            </button>
            </li>

           
         </ul>
        </div>
        
            </div>
            </div>
        )
		
        ;
    }
    
 
}


export default NavBar;
