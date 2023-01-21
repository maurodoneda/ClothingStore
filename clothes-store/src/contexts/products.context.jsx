import {createContext, useEffect, useState} from "react";
import {getCollectionAndDocs} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext(
    {
        products : []
    }
);

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        return async () => {
            const collections = await getCollectionAndDocs();
            setProducts(collections);
        };
    }, []);

    const value = { products, setProducts };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
