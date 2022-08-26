import React from "react";
import "./Posts.css";
const Posts = ({ posts, verify }) => {
  if (verify) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="container">
      {posts.map((post) => (
        <li key={post.id} className="card">
          <div className="service_provider_name">{post.name}</div>
          <div className="status">{post.status}</div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
