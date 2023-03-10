import React, { useState, useEffect } from "react";
import blogs from "../BlogsData/blogs";
import "../BlogList/BlogList.css";

function BlogList() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBlogData(blogs);
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {blogData.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
