export const initialState = {
  basket: [],
  bid: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove digital asset, id: ${action.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "CHANGE_QTY":
      return {
        ...state,
        basket: state.basket.filter((item) =>
          item.id === action.id ? (item.qty = action.qty) : item.qty
        ),
      };

    case "BID":
      return {
        ...state,
        bid: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
