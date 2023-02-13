import React, { useState, useEffect } from "react";
import blogs from "../BlogsData/blogs";
import "../BlogList/BlogList.css";

function BlogList() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Set up effect to load blog data after component mounts
      // Simulate a delay for loading the blog data
      setBlogData(blogs); // Set the blog data to the imported blogs object
      setIsLoading(false); // Set loading state to false to show the blog data
    }, 2000);
  }, []); // Run this effect only once, when the component mounts (empty dependency array)

  if (isLoading) {
    // If loading state is true, show "Loading..." message
    return <div>Loading...</div>;
  }

  return (
    <div>
      {blogData.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <h3>Comments:</h3>
          {blog.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <small>{comment.author}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
