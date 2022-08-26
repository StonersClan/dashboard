import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavDets.css";

function NavDets() {
  function handleReload() {
    window.location.reload();
  }

  return (
    <section className="top-nav">
      <div>Address Update Status</div>
      <input id="menu-toggle" type="checkbox" />

      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        <Button onClick={handleReload}>Log Out</Button>
      </ul>
    </section>
  );
}

export default NavDets;
