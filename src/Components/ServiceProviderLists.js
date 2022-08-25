import React, { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import axios from "axios";
import Posts from "./Posts";
import Pagenation from "./Pagenation";
import NavDets from "./NavDets";
import "./ServiceProviderLists.css";

function ServiceProviderLists(props) {
  console.log(props.adhaar);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [acPosts, setAcPosts] = useState([]);
  const [dcPosts, setDcPosts] = useState([]);
  const [pdPosts, setPdPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const pagenate = (number) => {
    //state variable update would re-render the component
    setCurrentPage(number);
  };

  console.log(posts);

  var indexLast = currentPage * postsPerPage;
  var indexFirst = indexLast - postsPerPage;
  const currentPosts = posts.slice(indexFirst, indexLast);

  if (indexLast >= posts.length) {
    indexLast = posts.length;
  }

  return (
    <div className="list_bgd">
      <NavDets></NavDets>
      <Container>
        {/* <h1 className="text-primary mb">My Blog</h1> */}
        <Posts className="posts" posts={currentPosts} loading={loading}></Posts>
        <Pagenation
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          pagenate={pagenate}
        />
      </Container>
    </div>
  );
}

export default ServiceProviderLists;
