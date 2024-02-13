import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const totalPrice = cart[i];
        total = total + totalPrice.price;
        

    }
    let shipping = 0;
    if(total > 1000){
        shipping = 15.5;
    }else if(total > 350){
        shipping = 9.5;
    }else if(total > 150){
        shipping = 4.5;

    }
    const tax = Math.round(total / 10);
    
    return (
        <div>
            <h4>order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>TotalPrice: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>GrandTotal {total + shipping + tax}</p>

        </div>
    );
};

export default Cart;