import React, { Component } from 'react';
import './itemComponent.css'
import ButtonCounter from './buttonCounter';

class ItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            count: this.props.count
        };
    }

    handleClick = () => {
        this.setState({ isClicked: true, count: this.state.count + 1 });
    }

    handleAddItem = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleRemoveItem = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        
        console.log('card props:', this.props);
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
                        count={this.state.count} 
                        onAdd={this.handleClick} 
                        onAddItem={this.handleAddItem} 
                        onRemoveItem={this.handleRemoveItem}
                    />
                </div>
            </div>
        );
    }
}

export default ItemComponent;