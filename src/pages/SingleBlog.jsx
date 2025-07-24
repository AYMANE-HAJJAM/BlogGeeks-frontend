import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);

  const blog = blogData.find((b) => b._id === id);

  // ✅ Vérifie que le blog existe avant de continuer
  if (!blog) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-gray-500">
        Blog not found or still loading...
      </div>
    );
  }

  return (
    <div className="rounded-md border-1 border-gray-200 p-5 max-w-3xl flex flex-col gap-3 items-center justify-center mx-auto py-8">
      <img
        className="transition-transform duration-300 "
        src={`https://bloggeeks-backend-production.up.railway.app/images/${blog.image}`}
        alt=""
      />
      <p className="text-2xl font-bold">{blog.title}</p>
      <p className="text-[#4B6BFB]">{blog.category}</p>
      <p>{blog.description}</p>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-lg font-bold">Author: {blog.author.name}</p>
      </div>
      <p>
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default SingleBlog;
