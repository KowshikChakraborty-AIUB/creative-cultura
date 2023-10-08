import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceInformation from "../ServiceInformation/ServiceInformation";

const ServiceDetails = () => {

    const [serviceDetails, setServiceDetails] = useState({})

    const specificServiceID = useParams();

    const specificServiceData = useLoaderData();

    useEffect(() => {
        const specificService = specificServiceData.find(service => service.id == specificServiceID.id)

        setServiceDetails(specificService)

    }, [specificServiceData, specificServiceID.id])

    console.log(serviceDetails);
    return (
        <div>
            <ServiceInformation serviceDetails = {serviceDetails}></ServiceInformation>
        </div>
    );
};

export default ServiceDetails;