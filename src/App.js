import React, { Component } from 'react';
import './App.css';
import Burger from "./Components/Burger/Burger";
import Buttons from "./Components/Buttons/Buttons";
import Price from "./Components/Price/Price";

const INGREDIENTS = [
  {filling: 'Salad', price: 5, show: true},
  {filling: 'Bacon', price: 30, show: true},
  {filling: 'Cheese', price: 20, show: true},
  {filling: 'Meat', price: 50, show: true}
];

class App extends Component {

  state = {
    ingredients: [],
    price: 20
  };
  removeIngredients = (item) =>
  {
    const ingredients = [...this.state.ingredients];
    let price = this.state.price;
    let index = ingredients.indexOf(item);
    if(index !== -1){
      ingredients.splice(index, 1);
      price-= item.price;
     index = ingredients.indexOf(item);
     if(index === -1) {
       let i = INGREDIENTS.indexOf(item);
       INGREDIENTS[i].show = true;
     }
    }
    this.setState({ingredients, price});
  };

  addIngredients = item => {
    const ingredients = [...this.state.ingredients];
    let price = this.state.price;
    price+= item.price;
    ingredients.push(item);
    let index = INGREDIENTS.indexOf(item);
    INGREDIENTS[index].show = false;
   this.setState({ingredients, price});
  };

  render() {
    return (
      <div className="App">
        <Burger ingredients={this.state.ingredients}/>
        <Price price={this.state.price}/>
        <Buttons add={this.addIngredients} remove={this.removeIngredients} menu={INGREDIENTS}/>
      </div>
    );
  }
}

export default App;
