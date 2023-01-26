import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './category.page.styles.scss'
import {useSelector} from "react-redux";
import {selectCategories, selectIsCategoriesLoading} from "../../store/categories/categories.selectors";
import {Spinner} from "../../components/spinner/spinner.component";

const Category = () => {
    const {category} = useParams();
    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState([]);
    const isLoading = useSelector(selectIsCategoriesLoading);

    useEffect(() => {
        setProducts(categories[category]);
    }, [categories, category])

    return (
        <>
            <h2 className={'category-title'}>{category}</h2>
            {
                isLoading ? <Spinner/> :
                    <div className={'category-container'}>
                        {
                            products && products.map(x => <ProductCard key={x.id} product={x}/>)
                        }
                    </div>

            }
        </>
    )
}

export default Category;
