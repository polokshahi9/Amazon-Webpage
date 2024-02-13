import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping,  } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  
  const { img, name, seller, price, stock } = props.product;

  return (
    <div className="product">
      <div className="prodiuct_img">
        <img src={img} alt="" />
      </div>

      <div className="section_main">
        <h3 className="product_name">{name}</h3>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p className="price_tag">${price}</p>
        <br />
        <p>
          <small>Only <spam className="stock_number">{stock}</spam> left in stock - order soon</small>
        </p>
        <button className="btn_menu" onClick={() => props.handleClick(props.product)}> <FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
      
      </div>
    </div>
  );
  }
export default Product;
