import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Login.css";
import { Button } from "react-bootstrap";

const Login = (props) => {
  const [OTP, setOTP] = useState("");
  const handleSetOTP = (e) => {
    setOTP(e.target.value);
  };

  useEffect(() => {
    console.log(props);
  }, []);


  function verifyOTP() {
    props.handleSetVerify();
  }

  return (
    <Container>
      <div className="adhaar-logs">
        <label>
          Enter your Adhaar Number:
          <input
            type="text"
            value={props.adhaar}
            onChange={(e) => {
                props.handleSetAdhaarNum(e.target.value);
            }}
          />
        </label>
        <Button variant="primary" onClick={() => {}}>
          Get OTP
        </Button>
      </div>

      <div className="otp-logs">
        <label>
          Enter the OTP sent to registered mobile number:
          <input type="text" value={OTP} onChange={handleSetOTP} />
        </label>
        <Button variant="primary" onClick={verifyOTP}>
          VERIFY
        </Button>
      </div>
    </Container>
  );
};

export default Login;
