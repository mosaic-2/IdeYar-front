import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { codeVerificationApi } from "../../apis/codeVerficationApi.ts"; // Assuming the API function is in the specified folder

const CodeVerification = () => {
  const { signUpToken, code } = useParams();
  const navigate = useNavigate(); // Initialize navigation
  const [verificationStatus, setVerificationStatus] = useState(null); // To store verification status
  const [errorMessage, setErrorMessage] = useState(null); // To handle errors

  const handleCodeVerification = async () => {
    try {
      const response = await codeVerificationApi({ signUpToken, code });
      setVerificationStatus(response.data); // Assuming the API returns some success data
      setErrorMessage(null);

      // Redirect to login page after successful verification
      navigate("/login");
    } catch (error) {
      setVerificationStatus(null);
      setErrorMessage(
        error.response?.data?.message || "Code verification failed!"
      );
    }
  };

  useEffect(() => {
    if (signUpToken && code) {
      handleCodeVerification();
    }
  }, [signUpToken, code]);

  return (
    <div>
      <h1>Code Verification</h1>
      {verificationStatus && (
        <div>
          <p>Verification Successful! Redirecting to login...</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}
      {!verificationStatus && !errorMessage && <p>Verifying your code...</p>}
    </div>
  );
};

export default CodeVerification;
