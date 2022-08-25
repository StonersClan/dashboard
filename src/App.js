import React, {useState, useEffect} from 'react';
import {Container, Button} from 'react-bootstrap'
import axios from 'axios';
import ServiceProviderLists from './Components/ServiceProviderLists';

function App() {
  const [verify, setVerify] = useState(false);
  const [adhaarNum, setAdhaarNum] = useState('');
  const [OTP, setOTP] = useState('');

  function verifyOTP() {
    setVerify(true);
  }
  function sendOTP(e) {
    console.log(adhaarNum);
  }
  function handleSetAdhaar(e) {
    setAdhaarNum(e.target.value);
  }
  function handleSetOTP(e) {
    setOTP(e.target.value);
  }

  if(verify) {
    return <ServiceProviderLists/>
  }

  return (
    <>
      {verify ? <ServiceProviderLists/> : 
      <div>
      <div>
        <label>
          Enter your Adhaar Number:
          <input type="text" value={adhaarNum} onChange={handleSetAdhaar} />
        </label>
        <Button
          variant="primary"
          onClick={sendOTP}
        >Get OTP</Button>
      </div>

      <div>
        <label>
          Enter the OTP sent to registered mobile number:
          <input type="text" value={OTP} onChange={handleSetOTP} />
        </label>
        <Button
          variant="primary"
          onClick={verifyOTP}
        >VERIFY</Button>
      </div>
      </div>
      }
    </>
  );
}

export default App;
