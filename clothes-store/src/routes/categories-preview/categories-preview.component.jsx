import {CategoriesContext} from "../../contexts/categoriesContext";
import {useContext} from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categories} = useContext(CategoriesContext);
    console.log(categories);

    return (
        <>
            {
                Object.keys(categories).map((title) => {
                    const products = categories[title];
                    return <CategoryPreview key={title} products={products} title={title}/>
                })
            }
        </>
    )
}

export default CategoriesPreview;
