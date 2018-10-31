import React, { Component } from "react";

export class FoodItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    };
  }
  showQuantityToResult = combosSelected => {
    this.props.showQuantityToResult(combosSelected);
  };
  addFood = (food, quantity) => {
    this.setState({
      quantity: quantity
    });
    this.props.onBuyFood(food, quantity);
    let combosSelected = JSON.parse(localStorage.getItem("ComboFoodSelected"));
    this.showQuantityToResult(combosSelected);
  };
  substractFood = (food, quantity) => {
    if (quantity >= 0) {
      this.setState({
        quantity: quantity
      });
      this.props.onBuyFood(food, quantity);
      let combosSelected = JSON.parse(
        localStorage.getItem("ComboFoodSelected")
      );
      this.showQuantityToResult(combosSelected);
    }
  };
  totalFood = (price, quantity) => {
    return price * quantity;
  };
  render() {
    let { food } = this.props;
    let { quantity } = this.state;
    let combo = food.combo;
    return (
      <tr>
        <td className="w-20">
          <img
            src={combo.img}
            alt={combo.comboName}
            className="combo-img w-50"
          />
        </td>
        <td className="w-20">
          <p className="mb-0">Combo {combo.comboName}</p>
          <small>{food.description}</small>
        </td>
        <td className="w-20">
          <i
            className="fa fa-minus"
            onClick={() => this.substractFood(combo, quantity - 1)}
          />
          <span className="pr-3 pl-3">{quantity}</span>
          <i
            className="fa fa-plus"
            onClick={() => this.addFood(combo, quantity + 1)}
          />
        </td>
        <td className="w-20">{combo.comboPrice}</td>
        <td className="w-20">
          {this.totalFood(combo.comboPrice, quantity)} VND
        </td>
      </tr>
    );
  }
}

export default FoodItem;
