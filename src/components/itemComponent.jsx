import React, { Component } from 'react';
import './itemComponent.css'
import ButtonCounter from './buttonCounter';

class ItemComponent extends Component {

    render() { 

        return ( 
            <div className='container'>
                <img src={this.props.itemImage} className='itemImage' alt='Food' />
                <div className='itemTitle'>
                    <img src={this.props.handleVegIcon} className='isVegIcon' alt='' />
                    <div className='itemName'>{this.props.itemName}</div>
                    <div></div>
                    <div className='itemDescription'>{this.props.itemDescription}</div>
                </div>
                <div className='priceButton'>
                    <div className="itemPrice">₹{this.props.itemPrice}</div>
                    <ButtonCounter />
                </div>
            </div>
        );
    }
}

export default ItemComponent;