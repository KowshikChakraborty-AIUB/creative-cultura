import PropTypes from 'prop-types';
const SinglePhotoGallery = ({ gallery }) => {
    const { name, image } = gallery;

    return (
        <div>
            <p className="text-center mb-4 font-bold">{name}</p>
            <img className="h-3/4 w-3/4 mx-auto" src={image} alt="" />
            <a href={image}
                download={image} className="flex justify-center">
                <button type="button" className="text-black underline font-bold"> Download </button>
            </a>
        </div>
    );
};

SinglePhotoGallery.propTypes = {
    gallery: PropTypes.object.isRequired
}

export default SinglePhotoGallery;