import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
AOS.init();

const ServiceCard = ({ service }) => {

    const { id, name, short_description, price, image } = service;

    return (
        <div data-aos="flip-left" className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <p className='font-semibold'>{price}</p>
                <div className="card-actions">
                    <Link to={`/service-detailed-info/${id}`}>
                        <button className="btn bg-black text-white hover:bg-black hover:text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard;