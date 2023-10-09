import { useEffect, useState } from "react";
import SinglePhotoGallery from "../../components/Single Photo Gallery/SinglePhotoGallery";

const PhotoGallery = () => {

    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setGalleries(data))
    }, [])


    return (
        <div>
            <h2 className="text-3xl font-bold flex justify-center my-10">Use Our Event&apos;s Photos for Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    galleries.map(gallery => <SinglePhotoGallery key={gallery.id} gallery={gallery}></SinglePhotoGallery>)
                }
            </div>
        </div>
    );
};

export default PhotoGallery;