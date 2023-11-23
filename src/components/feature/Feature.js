import './feature.css';
import chefVegetables from '../../assets/chef-vegetables.png'
import time from '../../assets/time-icon.png'
import document from '../../assets/document-icon.png'
import delivery from '../../assets/delivery-icon.png'


const Feature = () => {
    return ( 
        <section className='container-fluid feature'>
            <div className='container feature-group'>
                <div className='feature-item'>
                    <h2>Why should you use our service?</h2>
                    <p>We always provide the best and fastest service for all our customer</p>
                    <ul>
                        <li>
                            <img src={time} alt= 'time' className='img-fluid' />
                            We provide the fastest service
                        </li>
                        <li>
                            <img src={document} alt= 'time' className='img-fluid' />
                            No additional fees for orders
                        </li>

                        <li>
                            <img src={delivery} alt= 'time' className='img-fluid' />
                            Fast and reliable delivery
                        </li>
                    </ul>
                </div>
                <div className='feature-item'>
                    <img src={chefVegetables} alt='a chef holding vegetables' className='img-fluid' />
                </div>
            </div>
        </section>
     );
}
 
export default Feature;