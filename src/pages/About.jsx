import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
        style={{ backgroundImage: `url(${assets.about})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 bg-white bg-opacity-70 p-8 rounded-xl max-w-3xl text-black text-center">
        <h1 className="text-4xl uppercase font-bold mb-6">About</h1>
        <p className="text-lg leading-relaxed text-black">
           Welcome to{" "}
          <span className="text-blue-400 font-semibold">MyBlog</span>,
          your go-to platform for 
          insightful articles on technology, lifestyle, and beyond.
          Our mission is to share knowledge and inspire creativity through engaging and 
          well-researched content. Whether you're a tech enthusiast,
          a passionate writer, or someone looking for inspiration, we've got something for you!
          
        </p>
      </div>
    </div>
  );
};

export default About;
