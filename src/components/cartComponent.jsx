import React, { Component } from 'react';
import './cartComponent.css'
import ButtonCounter from './buttonCounter';


class CartComponent extends Component {

    render() { 
        return (
            <div className="cart-card">
                <img src="https://png.icons8.com/color/160/vegetarian-food-symbol.png" alt=""/>
                <div className='item-name'>Name of the dish which is long sometimes</div>
                <ButtonCounter />
                <div className="price">Price</div>
            </div>
        );
    }
}

export default CartComponent;