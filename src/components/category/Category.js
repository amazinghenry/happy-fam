import seafood from '../../assets/seafood.png';
import vegetables from '../../assets/vegetables.png';
import meat from '../../assets/meat.png';
import fruits from '../../assets/fruits.png';
import { Link } from 'react-router-dom';
import './category.css'


const Category = () => {
    return ( 
        <section className="category container-fluid">
            <div className="container">
                <h2 className="category-title">Browse All Categories</h2>
                <div className="category-group">
                    <Link to="/" className="category-item">
                        <img src = {seafood} alt = "seafood" className="img-fluid" />
                        <p>Seafood</p>
                    </Link>
                    <Link to="/" className="category-item">
                        <img src = {vegetables} alt = "vegetables" className="img-fluid" />
                        <p>Vegetables</p>
                    </Link>
                    <Link to="/" className="category-item">
                        <img src = {meat} alt = "meat" className="img-fluid" />
                        <p>Meat</p>
                    </Link>
                    <Link to="/" className="category-item">
                        <img src = {fruits} alt = "fruits" className="img-fluid" />
                        <p>Fruits</p>
                    </Link>
                </div>
            </div>
        </section>
     );
}
 
export default Category;