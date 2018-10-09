import React, { Component } from 'react';
import './buttonCounter.css'

class ButtonCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            isClicked: false,
            count: 0
        };
    }
    
    handleClick = () => {
        this.setState({isClicked: true, count: this.state.count + 1 })
    }

    handleAddItem = () => {
        this.setState({count: this.state.count + 1 })
    }

    handleRemoveItem = () => {
        this.setState({count: this.state.count - 1 })
    }

    render() {

        return (
            (this.state.count !== 0) ? 
            <div>
                <button onClick={this.handleRemoveItem}>-</button>
                <span> {this.state.count} </span>
                <button onClick={this.handleAddItem}>+</button>
            </div> : 
            <button onClick={this.handleClick}>Add</button>
        );
    }
}

export default ButtonCounter;