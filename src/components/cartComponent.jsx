import React, { Component } from 'react';
import './cartComponent.css'
import ButtonCounter from './buttonCounter';


class CartComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleAddItem = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleRemoveItem = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() { 
        console.log('cart comp', this.props);
        
        return (
            <div className="cart-card">
                <img src="https://png.icons8.com/color/160/vegetarian-food-symbol.png" alt=""/>
                <div className='item-name'>{this.props.name}</div>
                <ButtonCounter 
                    count={this.state.count}
                    onAdd={this.handleClick}
                    onAddItem={this.handleAddItem}
                    onRemoveItem={this.handleRemoveItem}
                />
                <div className="price">₹{this.props.price}</div>
            </div>
        );
    }
}

export default CartComponent;