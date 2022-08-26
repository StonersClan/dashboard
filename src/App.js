import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import ServiceProviderLists from "./Components/ServiceProviderLists";
import "./App.css";
import Login from "./Components/Login";

function App() {
  const [verify, setVerify] = useState(false);
  const [adhaarNum, setAdhaarNum] = useState("100000000001");

  function handleSetAdhaar(num) {
    setAdhaarNum(num);
  }

  function handleSetVerify() {
    setVerify(true);
  }

  return (
    <>
      {verify ? (
        <ServiceProviderLists
          className="ppxx"
          adhaar={adhaarNum}
        />
      ) : (
        <Login
          styles={{
            backgroundColor: "antiquewhite",
          }}
          adhaar={adhaarNum}
          handleSetAdhaarNum={handleSetAdhaar}
          handleSetVerify={handleSetVerify}
        />
      )}
    </>
  );
}

export default App;
