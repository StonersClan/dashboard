import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./AdhAdd.css";

function AdhAdd(props) {
  return (
    <section className="sec">
      <div className="first"><b>Aadhaar ID:</b> {props.adhaar}</div>
      <div className="second"><b>Address:</b> {props.address}</div>
    </section>
  );
}

export default AdhAdd;
