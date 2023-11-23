import advert from '../../assets/advert.png';
import './advert.css';
import { Link } from 'react-router-dom';


const Advert = () => {
    return ( 
        <section className="advert container-fluid">
            <div className="container">
            <Link to = '/'>
                <img src={ advert } alt="" className="img-fluid" />
            </Link>
            </div>
        </section>
     );
}
 
export default Advert;