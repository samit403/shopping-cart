import React, { Component } from 'react';
import './buttonCounter.css'

class ButtonCounter extends Component {

    render() {
        console.log('button',this.props);
        
        return (
            (this.props.count !== 0) ? 
            <div>
                <button onClick={this.props.onRemoveItem}>-</button>
                <span> {this.props.count} </span>
                <button onClick={this.props.onAddItem}>+</button>
            </div> : 
            <button onClick={this.props.onAdd}>Add</button>
        );
    }
}

export default ButtonCounter;