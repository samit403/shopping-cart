import React, { Component } from 'react';
import ItemComponent from './itemComponent'
import './itemList.css';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'Fast Food',
            cards: [
                {   id: 0,
                    itemImage: 'https://i.imgur.com/WS5SVWLb.jpg',
                    itemName: 'Non-Veg Hakka Noodles with Chicken',
                    itemDescription: 'Hakka noodles along with chicken and vegetables (may contain egg)',
                    itemHoverDescription: '',
                    itemPrice: 180.00,
                    itemCount: 0,
                    isVeg: false,
                },
                {   id: 1,
                    itemImage: 'https://i.imgur.com/9cqkMPzb.jpg',
                    itemName: 'Non Veg Burger with cheese',
                    itemDescription: 'Chicken patties grilled and tossed with a slice of cheeze on fresh buns',
                    itemHoverDescription: '',
                    itemPrice: 280.00,
                    itemCount: 0,
                    isVeg: false,
                },
                {   id: 2,
                    itemImage: 'https://i.imgur.com/bCLGyRWb.jpg',
                    itemName: 'Herb crusted potato wedges',
                    itemDescription: 'Hand cut potatoes grilled over charred fire along with dazzle of fresh rosemary and butter',
                    itemHoverDescription: '',
                    itemPrice: 150.00,
                    itemCount: 0,
                    isVeg: true,
                },
                {   id: 3,
                    itemImage: 'https://i.imgur.com/d5wMGimb.jpg',
                    itemName: 'Vegetarian Momos from Darjeeling',
                    itemDescription: 'Contains carrots, cabbage and garlic, steamed slowly till perfection',
                    itemHoverDescription: '',
                    itemPrice: 100.00,
                    itemCount: 0,
                    isVeg: true,
                }
            ]
        };
    }

    handleVegIcon = (i) => {
        return (this.state.cards[i].isVeg) ? 'https://png.icons8.com/color/160/vegetarian-food-symbol.png' : 'https://png.icons8.com/color/1600/non-vegetarian-food-symbol.png'
    }


    // renderCard (i) {
        // return <ItemComponent 
        //             id={i}
        //             key={this.state.cards[i].id}
        //             itemImage={this.state.cards[i].itemImage}
        //             itemName={this.state.cards[i].itemName}
        //             itemDescription={this.state.cards[i].itemDescription}
        //             itemPrice={this.state.cards[i].itemPrice}
        //             isVeg={this.handleVegIcon(i)}
        //             onAdd={this.handleClick(i)}
        //         />;
    // }

    render() { 
        return ( 
            <div className="grid-container">
            <div className="header">{this.state.category}</div>
            <div className="sub-header">{this.state.cards.length} Items</div>
            <li>
                {this.state.cards.map(card => 
                    <ItemComponent 
                        key={card.id}
                        itemImage={card.itemImage} 
                        itemName={card.itemName}
                        itemDescription={card.itemDescription}
                        itemPrice={card.itemPrice}
                    />)}
            </li>
            </div>
        );
    }
}

export default ItemList;