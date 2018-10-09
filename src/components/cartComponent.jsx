import React, { Component } from 'react';
import ItemList from './itemList';
import './itemList.css'

class CartComponent extends Component {

    render() { 
        return (
            <div className="grid-container">
                <div className='header'>Cart</div>
                <div className="sub-header">1 Item</div>
            </div>
        );
    }
}

export default CartComponent;