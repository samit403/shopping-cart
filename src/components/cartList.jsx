import React, { Component } from 'react';
import './itemList.css'
import CartComponent from './cartComponent';

class CartList extends Component {


    render() { 
        return ( 
            <div className="grid-container">
                <div className='header'>Cart</div>
                <div className="sub-header">1 Item</div>

            </div>
        );
    }
}

export default CartList;