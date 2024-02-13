import React from 'react'
import './hader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from'../images/MicrosoftTeams-image.png';



function hader() {
  return (
    <div className='img_logo'>
        <img src={logo} alt="" />
    <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        <br />
        <input type="text" />
        </nav>
        
    </div>
  )
}

export default hader