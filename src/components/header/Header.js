import './header.css'
import headerImage from '../../assets/header-image.png'

const Header = () => {
    return ( 
        <header className="container-fluid">
            <div className="container header-group">

                <div className="header-text-group">
                    <h1>
                        Promote Healthy Lifestyle with HappyFam Groceries
                    </h1>
                    <p>Discover the finest quality and most delectable grocery items worldwide—all conveniently accessible through our website.</p>
                    <button type="button" className="header-button">Shop Now</button>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt='a woman holding groceries' className='img-fluid' />
                </div>
                
            </div>
        </header>
     );
}
 
export default Header;