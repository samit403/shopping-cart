import React, { Component } from 'react';
import ItemList from './itemList';
import './itemList.css'
import './cartComponent.css'
import ButtonCounter from './buttonCounter';


class CartComponent extends Component {

    render() { 
        return (
            <div className="grid-container">
                <div className='header'>Cart</div>
                <div className="sub-header">1 Item</div>
                <div className="cart-card">
                    <img src="https://png.icons8.com/color/160/vegetarian-food-symbol.png" alt=""/>
                    <div className='item-name'>Name of the dish which is long sometimes</div>
                    <ButtonCounter />
                    <div className="price">Price</div>
                </div>
            </div>
        );
    }
}

export default CartComponent;