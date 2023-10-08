import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ServiceInformation = ({serviceDetails}) => {

    const {name, image, long_description, price} = serviceDetails;

    return (
        <div data-aos="zoom-in-up">
            <h2 className="text-5xl font-bold text-center">{name}</h2>
            <img className='mx-auto mt-10' src={image} alt="" />
            <p className="text-center mt-10 text-xl">{long_description}</p>
            <p className="mt-10 font-bold text-center text-xl">Our Service Charge is between {price}</p>
            <p className="text-center font-bold text-xl">(Please contact with us for more details)</p>
        </div>
    );
};

ServiceInformation.propTypes = {
    serviceDetails: PropTypes.object.isRequired
}

export default ServiceInformation;