const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <aside>
                <div className="flex items-center gap-2">
                    <img src="https://i.ibb.co/DYCn8nR/cultural-logo.jpg" className="h-12 rounded-full" alt="" />
                    <p className="text-xl font-bold">
                        Community & Culture
                    </p>
                </div>
                <p className="font-semibold">
                    Office: Shyampur, Kadamtali, Faridabad, Dhaka-1204
                </p>
                <div>
                    <p className="text-xl font-bold">Contact Us</p>
                    <p className="font-semibold mt-4">
                        Mobile: 01764199181,
                        E-mail: kowshikchakraborty6@gmail.com
                    </p>
                </div>
                <p className="mt-8">Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;