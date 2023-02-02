import React, { useState } from 'react';

import { 
   NavLink,
  Outlet,
  useNavigate
  } from "react-router-dom";

 function SearchBox(props) {

  const navigate=useNavigate();

  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/catalog/name/${name}`);

  };
  return (
<div className="search-box">

<form className="search" onSubmit={submitHandler} >

  <div className="search">
  <input
          type="text"
          name="q"
          id="q"
          className="searchTerm" placeholder="Search for products..."
          onChange={(e) => setName(e.target.value)}
        ></input>

    <button className="searchButton" type="submit">
 <i className="fa fa-search search-icon"></i>
            </button>

  </div>
  </form>
  <Outlet />
  </div>
    

    
  );
}

export default SearchBox;