import {createSelector} from "reselect";

const cartSlice = (store) => store.cart;

export const selectCartItems = createSelector(
  [cartSlice],
  (slice) => slice.cartItems
)

export const selectIsCartOpen = createSelector(
  [cartSlice],
  (slice) => slice.isCartOpen
)

export const selectCartCount = createSelector(
  [cartSlice],
  (slice) => slice.cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector(
  [cartSlice],
  (slice) => slice.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
)
