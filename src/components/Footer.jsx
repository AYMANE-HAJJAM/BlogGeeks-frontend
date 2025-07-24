import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-4 pt-12 mt-12">
      {/* Top sections: About, Quick Links, Categories */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-gray-300">
        {/* About */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-700">About</h1>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim
            mollitia voluptates natus vitae, dignissimos saepe sequi voluptatum.
            Suscipit totam hic magni atque, corporis tempore?
          </p>
          <h4 className="text-md font-medium text-gray-700">Email: metablog@gmail.com</h4>
          <h4 className="text-md font-medium text-gray-700">Phone: 06457290471</h4>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-3">Quick Links</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/blogs" className="hover:text-black">Blogs</Link>
            <Link to="/about" className="hover:text-black">About</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-3">Categories</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Weather</li>
            <li className="cursor-pointer hover:text-black">Lifestyle</li>
            <li className="cursor-pointer hover:text-black">Technology</li>
            <li className="cursor-pointer hover:text-black">News</li>
          </ul>
        </div>
      </div>

      {/* Bottom section: logo and copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-10 h-10" />
          <p className="text-gray-800">
            Meta <span className="font-bold text-xl">Blog</span>
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 text-gray-600 text-sm">
          <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          <li className="hover:text-black cursor-pointer">Terms and Conditions</li>
          <li className="hover:text-black cursor-pointer">© 2025. All Rights Reserved By Meta Blog.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
