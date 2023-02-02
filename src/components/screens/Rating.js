import React, { Component, Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from "react-router-dom";
//Axios for get request
import axios from 'axios';
import {listRatings} from './../../actions/productActions';


export default function Rating(props) {
  const { rating, numReviews, caption } = props;

  const productId  = props.productId;

  const RatingList = useSelector((state) => state.RatingList);
  const {
    loading: loadingRating,
    error: errorRating,
    ratings,
  } = RatingList;

  const dispatch = useDispatch(productId);

  useEffect(() => {
    dispatch(listRatings(productId));
  }, [dispatch]);


  return (

<div className="rating">

{loadingRating ?


<div className="">
<span>Loading... </span>
</div>
 :
errorRating ? 
<div>{errorRating}</div> :

  (
<div>   
  
   

      <span>
        <i
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating <= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        
        <div className="reviews"></div>
      )}  
</div>
    
    )
}

   
    </div>

    
  );
}
