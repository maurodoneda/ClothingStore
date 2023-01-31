import {setCartItems, setIsCartOpen} from "./cart.actions";
import {AnyAction} from "redux";
import {Item} from "../categories/models/category";

export type CartState = {
  isCartOpen : boolean,
  cartItems: Item[]
}

const CART_INITIAL_STATE : CartState = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction) => {

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload
    };
  }
    return state;
}
