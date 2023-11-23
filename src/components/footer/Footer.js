import './footer.css';
import mainLogo from '../../assets/main-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <footer className='container-fluid'>
            <div className='container footer-group'>

                <div className='subscribe'>
                <img src={mainLogo} alt="happyfam logo" className="img-fluid" />

                <p>Completely synergise premium collaborate & Ideasharing with compelling product distintive paradigms whereas one-to-one intellectual capital.</p>
                
                <form>
                <input type="email" id="email" name="email" className='sub-form' placeholder="Enter email address" />
                <button type='submit' className='sub-button'>Subscribe</button>
                </form>
                </div>
                
                <div className='customer-service'>
                    <p className='footer-title'>Customer Services</p>
                    <div className='footer-link-group'>
                        <Link to = "/" className="footer-link">Testimonial</Link>
                        <Link to = "/" className="footer-link">Contact</Link>
                        <Link to = "/" className="footer-link">Location & Working Hours</Link>
                        <Link to = "/" className="footer-link">Our Guarantee</Link>
                        <Link to = "/" className="footer-link">Track your Order</Link>
                        <Link to = "/" className="footer-link">Help Page</Link>
                    </div>
                </div>
                <div className='quick-link'>
                    <p className='footer-title'>Quick Link</p>
                    <div className='footer-link-group'>
                        <Link to = "/" className="footer-link">Your Account</Link>
                        <Link to = "/" className="footer-link">Return & Exchange</Link>
                        <Link to = "/" className="footer-link">Return Center</Link>
                        <Link to = "/" className="footer-link">Purchase History</Link>
                        <Link to = "/" className="footer-link">Latest New Blog</Link>
                        <Link to = "/" className="footer-link">Shipping & Delivery</Link>
                    </div>
                </div>
            </div>
        </footer>
        <div className='container-fluid copyright'>
            <div className='container copyright-group'>
                <div className='copyright-item'>
                    All rights reserved, Made by <a href='http://amazingdojo.xyz'>AmazingDojo</a>
                </div>
                <div className='copyright-item'>
                    <a href='/'> Terms & Condition</a>
                    <a href='/'> Privacy Policy</a>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default Footer;