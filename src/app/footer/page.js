import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    <div className="flex flex-col justify-center items-center md:items-start mb-4">
                        <p className="text-lg font-semibold">Contact Information</p>
                        <p className="mb-2">Email:</p>
                        <a href="mailto:customersupport@shripriyapriyotam.com" className="block text-blue-400 hover:underline">
                            customersupport@shripriyapriyotam.com
                        </a>

                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start mb-4">
                        <p className="text-lg font-semibold">Address</p>
                        <p>21 Giriraj Industries</p>
                        <p>Near Hari Ichha Industries</p>
                        <p>Near Umyadham Mandir</p>
                        <p>Surat - 395006</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start mb-4">
                        <Link href="/contact" className="text-blue-400 hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>



    );
};

export default Footer;
