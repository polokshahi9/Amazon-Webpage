
import React, { useState } from 'react';
import './Shop.css';
import data from'../../fakeData/products.json';
import Product from '../Product/Product';
import Carts from '../../components/Cart/Cart';



const Shop = (props) => {
    const firstTen = data.slice(0, 10);
    console.log(firstTen);
    const [products, setProduct] = useState(firstTen);
    const [cart, setCart] = useState([]);
   
    const handleClick = (product) =>{
        console.log('product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
        

    }
    

    return (
        <div className='shop_container'>
            <div className="product_container">
           
            {
                products.map(pd => <Product handleClick={handleClick} product ={pd}></Product>)
            }
           

            </div>
            <div className="cart_conatiner">
                <Carts cart={cart}></Carts>
                
                
              
            </div>
          
        
            
        </div>
    );
};

export default Shop;