import {CART_ACTIONS} from "./cart.actions";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTIONS.SET_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTIONS.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      };
    default:
      return state;
  }
}
