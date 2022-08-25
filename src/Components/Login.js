import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Login.css";
import { Button } from "react-bootstrap";

const Login = (props) => {
  const [adhaarEnabled, setAdhaarEnabled] = useState(true);
  const [OTP, setOTP] = useState("");

  const handleSetOTP = (e) => {
    setOTP(e.target.value);
  };

  const validateAdhaar = () => {
    if (props.adhaar.length > 12 || props.adhaar.length < 12) {
      alert("Please Enter Valid Andhaar Number");
      return false;
    }
    const str = props.adhaar;
    for (let i = 0; i < 12; i++) {
      if (str[i] < "0" || str[i] > "9") {
        alert("Please Enter Valid Andhaar Number");
        return false;
      }
    }
    setAdhaarEnabled(false);
    return true;
  };

  function verifyOTP() {
    if (adhaarEnabled) {
        alert("Incorrect OTP or Adhaar");
        return;
    }
    if (OTP.length < 6 || OTP.length > 6) {
      alert("Please Enter Correct OTP");
    } else {
      for (let i = 0; i < OTP.length; i++) {
        if (OTP[i] < "0" || OTP[i] > "9") {
          alert("Please Enter Correct OTP");
          return;
        }
      }
      props.handleSetVerify();
    }
  }

  return (
    <Container className="form">
      <h3>Login for Updates</h3>
      <div className="adhaar-logs">
        <label>
          Enter your Adhaar Number:
          <input
            type="text"
            value={props.adhaar}
            onChange={(e) => {
              if (adhaarEnabled) props.handleSetAdhaarNum(e.target.value);
            }}
          />
        </label>
        <Button className="button" variant="primary" onClick={validateAdhaar}>
          Get OTP
        </Button>
      </div>

      <div className="otp-logs">
        <label>
          Enter the OTP sent to registered mobile number:
          <input type="text" value={OTP} onChange={handleSetOTP} />
        </label>
        <Button className="button" variant="primary" onClick={verifyOTP}>
          VERIFY
        </Button>
      </div>
    </Container>
  );
};

export default Login;
