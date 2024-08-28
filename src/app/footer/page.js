import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
<footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="text-lg font-semibold mb-2">Contact Information</p>
                <p className="mb-2">Email:</p>
                <a href="mailto:customersupport@shripriyapriyotam.in" className="text-blue-400 hover:underline">
                    customersupport@shripriyapriyotam.in
                </a>
            </div>
            {/* Address */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="text-lg font-semibold mb-2">Address</p>
                <p className="mb-1">21 Giriraj Industries</p>
                <p className="mb-1">Near Hari Ichha Industries</p>
                <p className="mb-1">Near Umyadham Mandir</p>
                <p>Surat - 395006</p>
            </div>
            {/* Contact Us Link */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <Link href="/contact" className="text-blue-400 hover:underline">
                    Contact Us
                </Link>
            </div>
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
                <Image
                    src="/logo/logo.png"
                    width={150}
                    height={150}
                    alt="Company Logo"
                    className="object-contain"
                />
            </div>
        </div>
        {/* Copyright Notice */}
        <div className="text-center">
            <p className="text-sm">© Shri Priya Priyotam 2024. All rights reserved.</p>
        </div>
    </div>
</footer>


    
    );
};

export default Footer;
