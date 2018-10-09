import React, { Component } from 'react';
import './itemComponent.css'

class ItemComponent extends Component {

    render() { 

        console.log(this.props);
        
        return ( 
            <div className='container'>
                <img src={this.props.itemImage} className='itemImage' alt='Food' />
                <div className='itemTitle'>
                {console.log(this.props.handleVegIcon)}
                    <img src={this.props.handleVegIcon} className='isVegIcon' alt='' />
                    <div className='itemName'>{this.props.itemName}</div>
                    <div></div>
                    <div className='itemDescription'>{this.props.itemDescription}</div>
                </div>
                <div className='priceButton'>
                    <div className="itemPrice">₹{this.props.itemPrice}</div>
                    <button>Add</button>
                </div>
            </div>
        );
    }
}

export default ItemComponent;