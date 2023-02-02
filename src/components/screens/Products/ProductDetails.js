import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation, useMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../NavBar/';
import Footer from "./../Footer";
import {listRelatedProducts} from './../../../actions/productActions';
import { detailsProduct } from './../../../actions/productActions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Rating from "../Rating";
import ScrollingText from '../Carousel/ScrollingText';
import lightCart from './../../images/icons/cart-white.svg'
import RelatedProductList from './RelatedProducts';
import { ErrorBoundary } from "react-error-boundary";
import Error from '../../ErrorBoundary';
import RelatedBrandList from './RelatedBrands';
import SimilarProductList from './SimilarProducts';


function ProductDetails() {
  let params = useParams();

  const [menubarIsOpen, setMenubarIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch("/");

  const productId = params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch(params.id);

  useEffect(() => {

    dispatch(detailsProduct(params.id));

    return () => {
      //
    };
  }, [])

  const handleAddToCart = () => {
    navigate('/cart/' + params.id + '?qty=' + qty);
  };



  return (

    <React.Fragment >

      <Navbar />

      {loading ?


        <div className="product-container-single">
                <ScrollingText />

                <span>Loading...</span>
        </div> :
        error ? <div>{error}</div> :
          (

            <div className='product-container-single'>
                            <ScrollingText />
                            <div className="product-details-head">
                          <ul className="back-links">
                               <li> {product.name}</li>
                               <div className="clear"> </div>
                           </ul>
                 
                           </div>
       <div className="product-container-single-wrap">
<div className='similar-products-container'>
<ErrorBoundary FallbackComponent={Error}>
    <SimilarProductList sid={product.id}  />
    </ErrorBoundary>

</div>

            <div className="product-main-div">
              <div className="product-details-left">
                  <Carousel>
                    <div className='product-details-top'>
                      <img src={"../admin/uploads/" + product.imageOne} />

                    </div>
                   
                    {product.imageTwo ?
                     <div>
                <img src={"../admin/uploads/" + product.imageTwo} />
                </div>
             : 
             <img src={"../admin/uploads/" + product.imageOne} /> 
             }
                  
                   
                    <div>
                    {product.imageThree ?
                <img src={"../admin/uploads/" + product.imageThree} />
             : 
             <img src={"../admin/uploads/" + product.imageOne} /> 
             }

                    </div>
                  </Carousel>
                </div>

                <div className="product-details-right">
                <h4>{product.name}</h4>

                  <div className="product-row">
                   <Rating
                      productId={product.id}
                      rating={product.rating}  
                    ></Rating>
                    <h4>Price: &#8358;{product.price}</h4>
                  </div>          
                    
        <div className='product-description' >
        <h4>Product Description:</h4>  
        {menubarIsOpen ?
              <span onClick={() =>setMenubarIsOpen(false)}>x</span>
             : 
             <span onClick={() =>setMenubarIsOpen(true)}> +</span> 
             }
        </div>
       
        <div className={`productDropdown ${menubarIsOpen ? "active" : ""}`}>
        <div className="description-single"
                    dangerouslySetInnerHTML={{ __html: product.description }} />           
        </div>
       
        <div className="product-details-status">
                    <span> Status:{' '}</span>&nbsp;

                    {product.countInStock > 0 ? 'In Stock' : 'Currently Unavailable'}
                  </div>
                 
                  <div className="product-details-quantity">
                    <div>Quantity:{' '}</div>
                   <div>
                   <input type="number" min="1" max={product.countInStock} step="1"
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    />
                   </div>

                  </div>
                  <div className="product-details-category">
             <div className='category-wrapper'>
             <h4>Category:</h4>
               <h4>{product.Cname}</h4>
             </div>      
             <div className='category-wrapper'>
             <h4>Brand:</h4>
               <h4>{product.Bname}</h4>
             </div>
                    </div>
                  <div className="product-details-seller">
   <h1>Seller's Details</h1>
                   <h4><b>Shop Name:</b> {product.shopName}</h4>
                  <Rating
                      rating={product.Srating}
                    
                    ></Rating>
                      <Link
                          to={`/shops/${product.sellerId}`}
                        >
                        <h5> Go to shop</h5>
                     </Link>
                  </div>
                  <div className="add-to-cart-container">
                    <div className="add-to-cart">
                      {product.countInStock > 0 && (
                        <button
                          onClick={handleAddToCart}
                          className="submit-button cart-button"
                        >
                          <span>Add to Cart</span>
                          <img src ={lightCart} className='cart-icon'/>

                        </button>

                      )}
                    </div>


                  </div>

                </div>
              </div>
              </div>         

              <ErrorBoundary FallbackComponent={Error}>
    <RelatedProductList cid={product.category}  />
    </ErrorBoundary>

    <ErrorBoundary FallbackComponent={Error}>
    <RelatedBrandList bid={product.brand} />
    </ErrorBoundary>

</div>


          )
      }


      <Footer />
    </React.Fragment>
  );

}
export default ProductDetails;
