import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./AdhAdd.css";

function AdhAdd(props) {
  return (
    <section className="top-nav sec">
      <div className="first">{props.adhaar}</div>
      <div className="second">{props.address}</div>
    </section>
  );
}

export default AdhAdd;
