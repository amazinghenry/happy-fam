import './showcase.css';
import showcaseImage from '../../assets/floating-vegetables.png'
import checkIcon from '../../assets/check-icon.png'


const Showcase = () => {
    return ( 
        <section className='container-fluid showcase'>
            <div className='container showcase-group'>
                <img src = {showcaseImage} alt='vegetables floating' className='img-fluid' />
                <div className='showcase-text-group'>
                    <h2>Best Quality Groceries Just for You</h2>
                    <p>We prioritise quality in each of our grocery, below are the advantages of our products.</p>
                    <ul>
                        <li>
                            <img src={ checkIcon } alt='check icon' className='img-fluid' />
                            Best Service than others
                        </li>
                        <li>
                        <img src={ checkIcon } alt='check icon' className='img-fluid' />
                        Use experiences staff
                        </li>
                        <li>
                        <img src={ checkIcon } alt='check icon' className='img-fluid' />
                        User-friendly App
                        </li>
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Showcase;