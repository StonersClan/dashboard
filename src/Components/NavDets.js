import React from "react";
import "./NavDets.css";

function NavDets() {
  return (
    <section className="top-nav">
      <div>
        <b>Address Update Status</b>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
    </section>
  );
}

export default NavDets;
