import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FollowUs = () => {

    return (
        <div data-aos="fade-up-right">
            <div className="text-5xl font-bold text-center mt-20">
                Follow / Subscribe Us
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-4">
                <a href="https://www.facebook.com/" className="flex gap-2 items-center">
                    <img className="w-1/6" src="https://i.ibb.co/hf744LG/facebook-circle-pictogram.png" alt="" />
                    <p className="text-xl">Facebook</p>
                </a>
                <a href='https://www.instagram.com/' className="flex gap-2 items-center">
                    <img className="w-1/6 bg-white" src="https://i.ibb.co/crRsp9G/instagram-circle-icon.jpg" alt="" />
                    <p className="text-xl">Instagram</p>
                </a>
                <a href='https://www.youtube.com/' className="flex gap-2 items-center">
                    <img className="w-1/6" src="https://i.ibb.co/kM7B78L/youtube-social-red-circle.png" alt="" />
                    <p className="text-xl">YouTube</p>
                </a>
                <a href='https://www.pinterest.com/' className="flex gap-2 items-center">
                    <img className="w-1/6" src="https://i.ibb.co/kSFkz1g/app-pinterest-icon.png" alt="" />
                    <p className="text-xl">Pinterest</p>
                </a>
            </div>
        </div>
    );
};

export default FollowUs;