import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss'
import {useSelector} from "react-redux";
import {selectCategories} from "../../store/categories/categories.selectors";

const Category = () => {
    const {category} = useParams();
    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [categories, category])

    return (
        <div className={'category-container'}>
            {
               products && products.map(x => <ProductCard key={x.id} product={x}/>)
            }
        </div>
    )
}

export default Category;
