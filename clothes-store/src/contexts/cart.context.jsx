import {createContext, useReducer} from "react";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
        },
        cartItems: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        removeItems: () => {}
    }
)

const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const ACTIONS = {
    SET_ITEMS: "SET_ITEMS",
    ADD_ITEMS: "ADD_ITEMS",
    REMOVE_ITEMS: "REMOVE_ITEMS",
    CLEAR_CART: "CLEAR_CART"
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTIONS.SET_ITEMS:
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`unhandle type ${type} in cartReducer`);
    }
}


export const CartProvider = ({children}) => {
    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

        const action = {
            type: ACTIONS.SET_ITEMS,
            payload: {
                cartItems : newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            }
        }
        dispatch(action);
    }

    const addItemToCart = (product) => {

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

    const removeItemFromCart = (product) => {

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

    const removeItems = (product) => {

        const exists = cartItems.some(x => x.id === product.id);
        if (!exists) {
            console.log('error, item does not exist in the cart')
            return;
        }

        const newItemList = cartItems.filter(item => item.id !== product.id);

        updateCartItemsReducer([...newItemList]);
    }

    const value = {
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        setIsCartOpen: () => {},
        addItemToCart,
        removeItemFromCart,
        removeItems
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

