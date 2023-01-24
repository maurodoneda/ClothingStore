import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../contexts/categoriesContext";
import {useContext, useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss'

const Category = () => {
    const {category} = useParams();
    const { categories } = useContext(CategoriesContext);
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
