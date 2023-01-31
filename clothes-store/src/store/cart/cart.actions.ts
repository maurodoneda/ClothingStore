import {ActionWithPayload, createAction, withMatcher} from "../../utils/reducers/reducers.utils";
import {Item} from "../categories/models/category";

export enum CART_ACTIONS {
  SET_ITEMS = "SET_ITEMS",
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
}

export type SetItems = ActionWithPayload<CART_ACTIONS.SET_ITEMS , Item[]>
export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS.SET_IS_CART_OPEN, boolean>

export const setIsCartOpen = withMatcher((value : boolean) => createAction( CART_ACTIONS.SET_IS_CART_OPEN, value));
export const setCartItems = withMatcher((newCartItems : Item[]) => createAction(CART_ACTIONS.SET_ITEMS, newCartItems));

export const addItemToCart = (product : Item, cartItems : Item[]) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    return setCartItems([...cartItems, {...product, quantity: 1}]);
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity + 1};
  })

  return setCartItems( [...newItemList]);
}

export const removeItemFromCart = (product : Item, cartItems : Item[]) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    return setCartItems([...cartItems, {...product, quantity: 0}])
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity !== 0 ? item.quantity - 1 : 0};
  })

  return setCartItems([...newItemList]);
}

export const removeItems = (product : Item, cartItems : Item[]) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    console.log('error, item does not exist in the cart')
    return;
  }

  const newItemList = cartItems.filter(item => item.id !== product.id);

  return setCartItems([...newItemList]);
}
