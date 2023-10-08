import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div data-aos="flip-left" className="text-5xl font-bold text-center mt-20">
                Services We are Providing
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;