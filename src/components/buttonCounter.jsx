import React, { Component } from 'react';
import './buttonCounter.css'

class ButtonCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked: true
        };
    }

    render() { 
        return ( 
            <div className="container">
                <button>Add</button>
            </div>
        );
    }
}

export default ButtonCounter;