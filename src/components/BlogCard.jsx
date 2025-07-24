import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="block border border-gray-300 shadow-md p-4 rounded-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
    >
      <img
        src={`https://bloggeeks-backend-production.up.railway.app/images/${image}`}
        alt={title}
        className="w-full h-52 object-cover rounded-md mb-3"
      />
      <p className="text-[#4B6BFB] font-semibold mb-2">{category}</p>
      <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
      <div className="flex items-center gap-3 mt-3">
        <p className="text-sm font-semibold text-gray-600">{author_name}</p>
        <span className="text-sm text-gray-400">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
