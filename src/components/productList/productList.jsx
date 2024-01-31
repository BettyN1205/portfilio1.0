import React from "react";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
      </div>
      <div className="pl-lists">
        {products.map((item) => (

          <section key={item.id} className="card-container">
            <div className="card">
            <div className="p-browser">
                 <div className="p-circle"></div>
                  <div className="p-circle"></div>
                  <div className="p-circle"></div>
             </div>
             <a href={item.link} target="_blank" rel="noreferrer">
                  <img className="p-img" alt="" src={item.img}></img>
             </a>
            </div>
            <div className="card-desc">
              <p>{item.des}</p>
              <span>TECH: {item.tech}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
