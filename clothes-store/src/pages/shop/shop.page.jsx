import './shop.page.styles.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.page";
import Category from "../category/category.page";
import {fetchCategoriesAsync} from "../../store/categories/categories.actions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchCategoriesAsync())
    }, []);

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
