import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

 function Product(props) {
  const { product } = props;
  return (

      <div className="product-wrap" key={product.id}>

<div className="product-left">
<div className="search-product-image">
  <img src={'./../../admin/uploads/' + product.imageOne} alt="" />
</div>
</div>

 <div className="product-right"> 
 <Link to={'/product/' + product.id} className="default-link" > 

<div className="product-name search-product-name">
  {product.name}
</div>
</Link>
<div className="product-price search-product-price">
&#8358;{product.price}
</div>
<Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
</div>




</div>
  );
}
export default Product;