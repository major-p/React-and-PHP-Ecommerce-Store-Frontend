import React from 'react';
import CookieConsent from "react-cookie-consent";


export default function Footer(){

    const date= new Date();

    return(

<div className='footer-container'>

 
    <p>All right Reserved. {date.getFullYear()}</p>

    <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="sfc"
  style={{ background: "#a7249a",color:"#fff" ,fontSize:"13px"}}
  buttonStyle={{ color: "black", fontSize: "13px",background:"#fff" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span >see our privacy policy</span>
</CookieConsent>
</div>

    );
}