import React, { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import axios from "axios";
import Posts from "./Posts";
import Pagenation from "./Pagenation";
import AdhAdd from "./AdhAdd";
import NavDets from "./NavDets";
import "./ServiceProviderLists.css";
import StatusTable from "./StatusTable";

const API_URL = "http://localhost:8080";

function ServiceProviderLists(props) {
  console.log(props.adhaar);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(
    "Ambegaon, Pune, 411041 Maharashtra, India"
  );

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/address-change/status?aadhaarID=${props.adhaar}`
      );
      setPosts(res.data.serviceProviders);
      setAddress(res.data.address);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="list_bgd">
      <NavDets />
      <Container>
        <AdhAdd adhaar={props.adhaar} address={address} />
        {/* <h1 className="text-primary mb">My Blog</h1> */}
        <StatusTable posts={posts} />
      </Container>
    </div>
  );
}

export default ServiceProviderLists;
