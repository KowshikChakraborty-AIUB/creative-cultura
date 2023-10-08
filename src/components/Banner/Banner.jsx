const Banner = () => {
    return (
        <div className="hero min-h-screen mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/vkXc2yq/land-of-culture.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Where culture meets creativity, <br />and community comes alive</h1>
                    <p className="mb-5 font-bold">Discover the Heartbeat of Bangladesh&apos;s Culture with us. <br />Immerse Yourself in Tradition, Unite in Celebration, and Create Lasting Memories. Let&apos;s Craft Your Perfect Event Together.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;