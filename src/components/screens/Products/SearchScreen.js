import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, Route,useHistory, useParams,useNavigate } from 'react-router-dom';
import { listProductCategories,listProducts } from './../../../actions/productActions';
import errorpic from "../../images/error.svg";
import empty from "../../images/empty.png";
import Navbar from './../NavBar';
import Footer from "./../Footer";
import Product from '../Product';
import Rating from './../Rating';
import { prices, ratings } from '../../../utils';
import Header from '../NavBar/Header';

function SearchScreen(props) {
  const navigate=useNavigate();

  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);


  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
   
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/catalog/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  return (
    
    <div>
    <Navbar />
    <Header />
    <div>
      <div className="container-search-top">
         
        {loading ? (
         <div className="search-result"> 
           <h1>Loading....</h1>
         </div>
        ) : error ? (
          <div className="search-result">{error}
             <img src={errorpic} className="search-error" />
</div>
        ) : (
          <div className="search-result">{products.length} Results</div>
        )}
        <div className="sort">
          Sort by{' '}
          <select
            value={order}
            onChange={(e) => {
              navigate(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="DESC">Newest Arrivals</option>
            <option value="featured">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </div>
       
      </div>
      </div>
    
      <div className="search-container">
     
        <div className="search-left">
            <br />
          <h3>Categories</h3>
          <div>
            {loadingCategories ? (
            <div className="loading-filter"> Loading...</div>
            ) : errorCategories ? (
              <div className="error-filter">{errorCategories} <br />
                 <img src={errorpic} className="search-error" />
</div>
            ) : (
                
                <ul className="search-list">
               
                {
                     categories.map(category =>
               
                  <li key={category.Cid}>
                    <Link
                      className={category.Cname === category ? 'active' : ''}
                      to={getFilterUrl({ category: category.Cid })}
                    >
                      {category.Cname}
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>
          <div>
            <h3>Price</h3>
            <ul className="search-list">
              {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    to={getFilterUrl({ min: p.min, max: p.max })}
                    className={
                      `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                    }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Avg. Customer Review</h3>
            <ul className="search-list-rating">
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? 'active' : ''}
                  >
                    <Rating caption={' & up'} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="search-right">
          {loading ? (
          <div className="no-product-found">
                         <h1>Loading....</h1>

          </div>
          ) : error ? (
            <div className="no-product-found">{error}< br/>
               <img src={errorpic} className="search-error" />
</div>
          ) : (
            <>
    
              {products.length === 0 && (
                 <div className="no-product-found">No Product Found<br />
                    <img src={empty} className="search-empty" />
</div>
              )}
                
           

                 <div className="product-block">
                {products.map((product) => (
                  <Product key={product.id} product={product}></Product>
                ))}
              </div>  
              <div className="pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              
              </div>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
export default SearchScreen;