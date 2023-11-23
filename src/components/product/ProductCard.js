import { Link } from "react-router-dom";
import './product.css';

const ProductCard = (props) => {
    return ( 
        <Link to = '/' className="product-item">
            <div className="product-image">
                <img src = {`./images/${props.imageUrl}`} alt="product" className="img-fluid" />
            </div>
            <div className="product-info">
                <p className="product-name">{props.productTitle}</p>
            </div>
            <div className="product-base">
                <p className="product-price">${props.price} / <span className="product-weight">{props.weight}kg </span> </p>
            </div>
        </Link>
     );
}
 
export default ProductCard;