import React, { Component } from 'react';
import './itemComponent.css'
import ButtonCounter from './buttonCounter';

class ItemComponent extends Component {

    render() {
        
        return (
            
            <div className='container'>
                <img src={this.props.image} className='itemImage' />
                <div className='itemTitle'>
                    <img src={this.props.icon} className='isVegIcon' />
                    <div className='itemName'>{this.props.name}</div>
                    <div></div>
                    <div className='itemDescription'>{this.props.dscription}</div>
                </div>
                <div className='priceButton'>
                    <div className="itemPrice">₹{this.props.price}</div>
                    <ButtonCounter 
                        count={this.props.count}
                        onAdd={this.props.onAdd}
                        onAddItem={this.props.onAddItem} 
                        onRemoveItem={this.props.onRemoveItem}
                    />
                </div>
            </div>
        );
    }
}

export default ItemComponent;