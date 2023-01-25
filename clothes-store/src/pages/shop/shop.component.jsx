import './shop.styles.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {getCategories} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/categories.actions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return async () => {
            const categories = await getCategories();
            dispatch(setCategories(categories));
        };
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path={':category'} element={<Category/>}/>
            </Routes>
        </>
    )
}

export default Shop;
