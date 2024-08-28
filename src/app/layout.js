import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shri Priya Priyotam",
  description: "Discover the timeless beauty of Indian tradition with Shri Priya Priyotam's exquisite Lengha Choli collection. Each piece is a harmonious blend of elegance and craftsmanship, designed to make you stand out on every occasion. Our Lengha Choli sets are crafted with meticulous attention to detail, featuring intricate embroidery and luxurious fabrics that reflect the rich heritage of Indian fashion. Perfect for weddings, festivals, and special celebrations, our ethnic wear promises to add a touch of grace and sophistication to your wardrobe. At Shri Priya Priyotam, we take pride in offering high-quality ethnic wear on India's leading platforms. Though we are currently operating on a smaller scale, our commitment to excellence ensures that each garment we offer meets the highest standards of craftsmanship and style. Embrace the charm of traditional Indian attire with our Lengha Choli and experience the perfect blend of tradition and contemporary fashion. Shop now and elevate your ethnic wear collection with Shri Priya Priyotam.",
  address: "21 Giriraj Industries, Near Hari Ichha Industries, Near Umyadham Mandir, Surat - 395006"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />{

          children
        }
        <Footer />

      </body>
    </html>
  );
}
