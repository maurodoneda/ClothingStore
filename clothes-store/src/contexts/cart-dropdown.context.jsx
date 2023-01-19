import {createContext, useState} from "react";

export const CartDropdownContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
        },
        cartItems: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {}
    }
)


export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) => {

        const exists = cartItems.some(x => x.id === product.id);
        if (!exists) {
            setCartItems([...cartItems, {...product, quantity: 1}])
            return;
        }

        const newItemList = cartItems.map(item => {
            if (item.id !== product.id)
                return item;

            return {...item, quantity: item.quantity + 1};
        })

        setCartItems([...newItemList]);
    }

    const removeItemFromCart = (product) => {

        const exists = cartItems.some(x => x.id === product.id);
        if (!exists) {
            setCartItems([...cartItems, {...product, quantity: 0}])
            return;
        }

        const newItemList = cartItems.map(item => {
            if (item.id !== product.id)
                return item;

            return {...item, quantity: item.quantity !== 0 ? item.quantity - 1 : 0};
        })

        setCartItems([...newItemList]);
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart};
    return (
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}

