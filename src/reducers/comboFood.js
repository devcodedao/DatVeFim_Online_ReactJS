import * as Types from "./../constants/actionTypes";

let initialState = [
  {
    combo: {
      id: 1,
      img: "https://www.galaxycine.vn/media/2017/12/1/combo1_1512118262371.jpg",
      comboName: 1,
      description: "1 Bắp + 1 Nước",
      comboPrice: 55000
    },
    quantity: 0
  },
  {
    combo: {
      id: 2,
      img: "https://www.galaxycine.vn/media/2017/12/1/combo2_1512118267824.jpg",
      comboName: 2,
      description: "1 Bắp + 2 Nước",
      comboPrice: 70000
    },
    quantity: 0
  }
];
const comboFood = (state = initialState, action) => {
  
  switch (action.type) {
    case Types.BUY_FOOD:
      let index = findCombo(state, action.combo);
      if (index !== -1) {
        state[index].quantity = action.quantity;
      }
      localStorage.setItem("ComboFoodSelected", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
let findCombo = (comboList, combo) => {
  let index = -1;
  for (let i = 0; i < comboList.length; i++) {
    if (comboList[i].combo.id === combo.id) {
      index = i;
      break;
    }
  }
  return index;
};
export default comboFood;
