import React from 'react';
import Header from './components/header.js';
import CartItems from './components/cartItems.js';
import AddItems from './components/addItems.js';
import Footer from './components/footer.js';
import './App.css';



let cartItemsList = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
];

const products = [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
];

class App extends React.Component {
        state = {
            items: cartItemsList,
            products: products,
        };


    addItem = (item) => {
        this.setState(prevState => (
            {
                items: prevState.items.concat(item),
            }
        ));
    };



    render() {
      return (
        <div>
          <Header />
          <CartItems items={this.state.items} />
          <AddItems onAddItem={this.addItem} products={this.state.products} items={this.state.items} />
          <Footer year="2019"/>
        </div>
      );

    }
}

export default App;
