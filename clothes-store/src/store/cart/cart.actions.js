import {createAction} from "../../utils/reducers/reducers.utils";

export const CART_ACTIONS = {
  SET_ITEMS: "SET_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

export const setIsCartOpen = (value) => createAction( CART_ACTIONS.SET_IS_CART_OPEN, value);


const updateCartItemsReducer = (newCartItems) => {

  const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
  const newCartTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  createAction(CART_ACTIONS.SET_ITEMS, {
    cartItems : newCartItems,
    cartTotal: newCartTotal,
    cartCount: newCartCount
  });
}

export const addItemToCart = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    updateCartItemsReducer([...cartItems, {...product, quantity: 1}]);
    return;
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity + 1};
  })

  updateCartItemsReducer( [...newItemList]);
}

export const removeItemFromCart = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    updateCartItemsReducer([...cartItems, {...product, quantity: 0}])
    return;
  }

  const newItemList = cartItems.map(item => {
    if (item.id !== product.id)
      return item;

    return {...item, quantity: item.quantity !== 0 ? item.quantity - 1 : 0};
  })

  updateCartItemsReducer([...newItemList]);
}

export const removeItems = (product, cartItems) => {

  const exists = cartItems.some(x => x.id === product.id);
  if (!exists) {
    console.log('error, item does not exist in the cart')
    return;
  }

  const newItemList = cartItems.filter(item => item.id !== product.id);

  updateCartItemsReducer([...newItemList]);
}
