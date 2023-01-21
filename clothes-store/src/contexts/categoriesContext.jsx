import {createContext, useEffect, useState} from "react";
import {getCollectionAndDocs} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext(
    {
        categories : []
    }
);

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        return async () => {
            const collections = await getCollectionAndDocs();
            setCategories(collections);
        };
    }, []);

    const value = { categories, setCategories };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
