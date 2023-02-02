import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from "react-redux";
import {listFeaturedProducts} from '../../../actions/productActions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function  FeaturedProductList(props) {


  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
       autoplay: true,
      arrows: true,
      adaptiveHeight: true,
      autoplaySpeed: 5000,
    

    }

  const productList = useSelector(state => state.FeaturedProductList);
  const {featuredproducts, loading , error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(listFeaturedProducts());

   
    return () => {
      //
    };
  }, [])
    return (
     
      loading? <div className="product-container">

      <div className="product-container">
        <h1>Featured Products</h1>
      <div className="banner-product-wrap" >

 <div className="banner-product-left"> 
<div className="banner-product-name">
<Skeleton  height={30} />
</div>
<div className="banner-product-price">
<Skeleton  height={30} />
</div>

</div>

<div className="banner-product-right">
<div className="banner-product-image">
<Skeleton  height={60} />
</div>
</div>
<Skeleton  height={10}  count={2}/>

</div>
      </div>
      </div> :
      error? 

<div className="product-container">
  <h1>Featured Products</h1>
<div className="latestproduct-error">
<h6>Sorry! Couldn't Load Products</h6>
{error}</div>
</div>

:
       
<div className="product-container">
  <h1>Featured Products</h1>

  <Slider  {...settings}  > 

{
                  featuredproducts.map(product =>
                 


<div className="product-wrapper" key={product.id}>
<Link to={'/product/' + product.id} className="default-link" > 

<div className="product-image">
  <img src={'admin/uploads/' + product.imageOne}  alt="" />
</div>
<div className="product-name">
  {product.name}
</div>


</Link>
</div>


 )
}
</Slider>
<hr className="product-ruler" />

</div>


         
    	    
			 
    
    );
  
}
export default FeaturedProductList;
