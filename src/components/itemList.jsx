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

    handleVegIcon = () => {
        return (this.state.cards.isVeg) ? 'https://png.icons8.com/color/160/vegetarian-food-symbol.png' : 'https://png.icons8.com/color/1600/non-vegetarian-food-symbol.png'
    }

    handleAdd = (card) => {
        const cards = [...this.state.cards]
        const index = cards.indexOf(card)
        cards[index].itemCount++;
        this.setState({ cards });
    }

    handleAddItem = (card) => {
        const cards = [...this.state.cards]
        const index = cards.indexOf(card)
        cards[index].itemCount++;
        this.setState({ cards });
    }

    handleRemoveItem = (card) => {
        const cards = [...this.state.cards]
        const index = cards.indexOf(card)
        cards[index].itemCount--;
        this.setState({ cards });
    }

    render() {
        return ( 
            <div className="grid-container">
                <div className="header">{this.state.category}</div>
                <div className="sub-header">{this.state.cards.length} Items</div>
                <li>
                    {this.state.cards.map(card => 
                        <div>
                            <ItemComponent
                                key={card.id}
                                image={card.itemImage}
                                name={card.itemName}
                                description={card.itemDescription}
                                price={card.itemPrice}
                                icon={this.handleVegIcon(card)}
                                count={card.itemCount}
                                onAdd={() => this.handleAdd(card)}
                                onAddItem={() => this.handleAddItem(card)}
                                onRemoveItem={() => this.handleRemoveItem(card)}
                            />
                        </div>
                    )}
                </li>
                {this.state.cards
                    .filter(card => card.itemCount !==0)
                    .map(card =>
                        <ItemComponent 
                            name={card.itemName}
                            count={card.itemCount}
                            icon={this.handleVegIcon(card)}
                            price={card.itemPrice}
                            onAdd={() => this.handleAdd(card)}
                            onAddItem={() => this.handleAddItem(card)}
                            onRemoveItem={() => this.handleRemoveItem(card)}
                        />
                    )}
            </div>
        );
    }
}

export default ItemList;