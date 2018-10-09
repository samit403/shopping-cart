import React, { Component } from 'react';
import './App.css';
import CartComponent from './components/cartComponent';
import ItemList from './components/itemList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ItemList />
        <CartComponent />
      </div>
      
    );
  }
}

export default App;
