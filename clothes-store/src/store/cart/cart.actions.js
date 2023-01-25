import {createAction} from "../../utils/reducers/reducers.utils";

export const CART_ACTIONS = {
  SET_ITEMS: "SET_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

export const setIsCartOpen = (value) => createAction( CART_ACTIONS.SET_IS_CART_OPEN, value);

export const addItemToCart = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    return updateCartItemsReducer([...cartItems, {...product, quantity: 1}]);
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity + 1};
  })

  return updateCartItemsReducer( [...newItemList]);
}

export const removeItemFromCart = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    return updateCartItemsReducer([...cartItems, {...product, quantity: 0}])
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity !== 0 ? item.quantity - 1 : 0};
  })

  return updateCartItemsReducer([...newItemList]);
}

export const removeItems = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    console.log('error, item does not exist in the cart')
    return;
  }

  const newItemList = cartItems.filter(item => item.id !== product.id);

  return updateCartItemsReducer([...newItemList]);
}

const updateCartItemsReducer = (newCartItems) => {
  console.log('action', newCartItems);
  return createAction(CART_ACTIONS.SET_ITEMS, newCartItems);
}
