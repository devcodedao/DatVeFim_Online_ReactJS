import React, { Component } from "react";
import "./BuyFood.css";
import FoodItem from "./../FoodItem/FoodItem";

export class BuyFood extends Component {
  showFood = comboFood => {
    let result = null;
    if (comboFood) {
      result = comboFood.map((food, index) => {
        return (
          <FoodItem
            key={index}
            food={food}
            onBuyFood={this.onBuyFood}
            showQuantityToResult={this.showQuantityToResult}
          />
        );
      });
    }
    return result;
  };
  onBuyFood = (combo, quantity) => {
    this.props.onBuyFood(combo, quantity);
  };
  showQuantityToResult = (combosSelected) => {
    this.props.showQuantityToResult(combosSelected);
  };
  render() {
    let { comboFood } = this.props;
    return (
      <div className="col-md-12 text-white">
        <h3>Chọn Combo</h3>
        <table className="table text-right tbl-food">
          <thead>
            <tr>
              <th />
              <th className="">Combo</th>
              <th className="">Số Lượng</th>
              <th className="">Giá (VND)</th>
              <th className="">Tổng (VND)</th>
            </tr>
          </thead>
          <tbody>{this.showFood(comboFood)}</tbody>
        </table>
      </div>
    );
  }
}

export default BuyFood;
