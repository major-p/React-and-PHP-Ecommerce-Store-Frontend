import React, { Component, Fragment, useState, useEffect, useLayoutEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import {listRelatedProducts} from './../../../actions/productActions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function  RelatedProductList(props) {

  
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

    let params = useParams();
    const cid  = props.cid;
    

  const RelatedproductList = useSelector((state) => state.RelatedProductList);
  const {
    loading: loadingRelated,
    error: errorRelated,
    rproducts,
  } = RelatedproductList;
  const dispatch = useDispatch(cid);

  useEffect(() => {
    dispatch(listRelatedProducts(cid));
  }, [dispatch]);

    return (
        loadingRelated? 
        
        <div className="related-product-container">


        <div className="related-product-container">
          <h1>New Arrivals</h1>
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
        errorRelated? 
  
  <div className="related-product-container">
    <h1>New Arrivals</h1>
  <div className="latestproduct-error">
  <h6>Sorry! Couldn't Load Products</h6>
  {errorRelated}</div>
  </div>
  
  :
         
  <div className="related-product-container">
    <h1> Products related to this Item</h1>
  
    <Slider  {...settings}  > 

  {
                    rproducts.map(product =>
                   
  
  
  <div className="product-wrapper" key={product.id}>
  <a  onClick={event =>  window.location.href='/product/' + product.id  }  className="default-link" >
  <div className="product-image">
    <img src={'../admin/uploads/' + product.imageOne}  alt="" />
  </div>
  <div className="product-name">
    {product.name}
  </div>
  
  
  </a>
  </div>
  
  
   )
  }

</Slider>
<hr className="product-ruler" />

  </div>
  

        );
  
    }
    export default RelatedProductList;
    
     