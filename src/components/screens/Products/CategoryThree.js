import React, { Component, Fragment, useState, useEffect, useLayoutEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import {listCategoryThreeProducts} from './../../../actions/productActions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function  CategoryThreeProductList(props) {

  
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
    

  const CategoryThreeproductList = useSelector((state) => state.CategoryThreeProductList);
  const {
    loading: loadingCategoryThree,
    error: errorCategoryThree,
    c3products,
  } = CategoryThreeproductList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategoryThreeProducts());
  }, [dispatch]);

    return (
        loadingCategoryThree? 
        
        <div className="product-container">


        <div className="product-container">
        <h1> Computers</h1>
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
        errorCategoryThree? 
  
  <div className="product-container">
        <h1> Computers</h1>
  <div className="latestproduct-error">
  <h6>Sorry! Couldn't Load Products</h6>
  {errorCategoryThree}</div>
  </div>
  
  :
         
  <div className="product-container">
        <h1> Computers</h1>
  
    <Slider  {...settings}  > 

  {
                    c3products.map(product =>
                   
  
  
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
    export default CategoryThreeProductList;
    
     