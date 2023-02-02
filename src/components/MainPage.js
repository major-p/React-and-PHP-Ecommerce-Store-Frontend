import React from "react";
import NavBar from "./screens/NavBar";
import Header from "./screens/NavBar/Header";
import Carousel from './screens/Carousel';
import ScrollingText from "./screens/Carousel/ScrollingText";
import Categories from "./screens/Categories";
import FeaturedProductList from "./screens/Products/FeaturedProductList";
import LatestProductList from "./screens/Products/LatestProductsList";
import Footer from "./screens/Footer";
import CategoryOneProductList from "./screens/Products/CategoryOne";
import CategoryTwoProductList from "./screens/Products/CategoryTwo";
import CategoryThreeProductList from "./screens/Products/CategoryThree";
import CategoryFourProductList from "./screens/Products/CategoryFour";


function MainPage() {

  return (
    <div className="">

  <NavBar />
<Header />
<Carousel />
<ScrollingText />

<Categories />
<FeaturedProductList />
<LatestProductList />
<CategoryOneProductList />
<CategoryTwoProductList />
<CategoryThreeProductList />
<CategoryFourProductList />
<Footer />


    </div>
  );
}

export default MainPage;
