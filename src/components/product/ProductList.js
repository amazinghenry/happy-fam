import './product.css';
import './ProductCard';
import data from "../../data/index.js";
import ProductCard from './ProductCard';


const ProductList = () => {
    const productData = data.map((product)=> {
        return <
            ProductCard
            key = {product.id}
            id = {product.id}
            productTitle = {product.productTitle}
            price = {product.price}
            weight = {product.weight}
            imageUrl = {product.imageUrl}
        />
    })

    return ( 
        <div className='container-fluid items'>
            <div className='container item-group'>
                <h2>Shop Healthy Grocery</h2>
                <div className='product-group'>
                    { productData }
                </div>
            </div>
        </div>
    );
}
 
export default ProductList;