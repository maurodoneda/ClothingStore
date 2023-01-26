import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategories, selectIsCategoriesLoading} from "../../store/categories/categories.selectors";
import {Spinner} from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectIsCategoriesLoading)

    return (
        <>
            {
                isLoading ? <Spinner/> :
                Object.keys(categories).map((title) => {
                    const products = categories[title];
                    return <CategoryPreview key={title} products={products} title={title}/>
                })
            }
        </>
    )
}

export default CategoriesPreview;
