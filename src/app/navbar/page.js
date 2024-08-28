import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">
                    <Link href="/">       Shri Priya Priyotam</Link>

                </div>
                <div>
                    <Link
                        href="/contact"
                        className="text-white text-lg hover:text-gray-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  