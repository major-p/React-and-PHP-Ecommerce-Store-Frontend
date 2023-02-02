import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { useDispatch, useSelector } from "react-redux";
import { listProductCategories } from './../../../actions/productActions';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function  Categories() {

    
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      }


    const dispatch = useDispatch();
  
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
      loading: loadingCategories,
      error: errorCategories,
      categories,
    } = productCategoryList;
    useEffect(() => {
      dispatch(listProductCategories());
    }, [dispatch]);


 return(
 
    loadingCategories? 
<div className="category-container">
       Loading....
       </div>
    :
    errorCategories? 

<div className="category-container">
<h6>Sorry! Couldn't Load Categories</h6>
<br />
<p>{errorCategories}</p>

</div>

:
 
<div className="category-container">
    <h1>Categories</h1>
     
<div className="category-list">
<Slider {...settings}  > 
{
                  categories.map(category =>

                  
                      <li key={category.Cid} className="category-list-wrap">
                        <Link
                          to={`/catalog/category/${category.Cid}`}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                         
                      <div className="category-image"> 
                        <img src={'admin/uploads/' + category.Cimage} alt="" />
                        </div>
                        <div className="category-name"> {category.Cname} </div>
                        </Link>

                      </li>
                               
 )
}
</Slider>
</div>



</div>
 
           
              
               
      
      );
    
  }
  export default Categories;
  


