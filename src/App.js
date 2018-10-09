import React, { Component } from 'react';
import './App.css';
import ItemList from './components/itemList';
import CartList from './components/cartList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ItemList />
        <CartList />
      </div>
    );
  }
}

export default App;
