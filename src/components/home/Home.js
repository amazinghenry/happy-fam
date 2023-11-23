import Header from "../header/Header";
import Category from '../category/Category';
import Showcase from "../showcase/Showcase";
import Feature from "../feature/Feature";
import ProductList from "../product/ProductList";
import Advert from "../advert/Advert";

const Home = () => {
    return ( 
        <>
        <Header />
        <Category />
        <Showcase />
        <Feature />
        <ProductList />
        <Advert />
        </>
     );
}
 
export default Home;