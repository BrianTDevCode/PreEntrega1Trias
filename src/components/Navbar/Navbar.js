import React, { useEffect, useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { mockedProducts } from "../../utils/products";
import { request } from "../../utils/request";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    request(mockedProducts).then((result) => {
      const categoriesProduct = [];

       result.filter((element) => {
        const isDuplicate = categoriesProduct.includes(element.category);

        if (!isDuplicate) {
          categoriesProduct.push(element.category);

          return true;
        }
        return false;
      });

      setCategories(categoriesProduct);
    });

   

  }, []);

 
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">
          <Link className="header__link" to={`/`}>
            Computer Shop
          </Link>
        </h1>
        <ul className="header__ul">
          {categories.map((cat, index) => {
           
            return <Link key={index} className="header__link--catgories" to={`/category/${cat}`}>{cat}</Link>;
         
          })}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
