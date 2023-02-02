import React, { Component, Fragment, useState, useEffect, useLayoutEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import {listMostViewedProducts} from '../../../actions/productActions';


function  MostViewedProductList(props) {

    let params = useParams();
    const sid  = props.sid;
    
  const MostViewedProductList = useSelector((state) => state.MostViewedProductList);
  const {
    loading: loadingMostViewed,
    error: errorMostViewed,
    mproducts,
  } = MostViewedProductList;
  
  const dispatch = useDispatch(sid);

  useEffect(() => {
    dispatch(listMostViewedProducts(sid));
  }, [dispatch]);

    return (
        loadingMostViewed? 
        
        <div className="related-product-container">


        <div className="related-product-container">
        <h5> Most Viewed items Today</h5>

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
        errorMostViewed? 
  
  <div className="-related-product-container">
    <h4> Most Viewed items Today</h4>
  <div className="latestproduct-error">
  <h6>Sorry! Couldn't Load Products</h6>
  {errorMostViewed}</div>
  </div>
  
  :
         
  <div className="related-product-container">
    <h4> Most Viewed items Today</h4>
  
  
  {
                    mproducts.map(product =>
                   
  
  
  <div className="similar-product-wrapper" key={product.id}>
  <div className="similar-products-left">
  <a  onClick={event =>  window.location.href='/product/' + product.id  }  className="default-link" >

  <div className="similar-product-image">
    <img src={'../admin/uploads/' + product.imageOne}  alt="" />
  </div>
  </a>
</div>

 <div className="similar-products-right">
 <a  onClick={event =>  window.location.href='/product/' + product.id  }  className="default-link" >

 <div className="similar-product-name">
  {product.name}
  </div>
  </a>
  <div className="similar-product-price">
  &#8358;{product.price}
  </div>
 </div>
  
  
  </div>
  
  
   )
  }

<hr className="product-ruler" />

  </div>
  

        );
  
    }
    export default MostViewedProductList;
    
     