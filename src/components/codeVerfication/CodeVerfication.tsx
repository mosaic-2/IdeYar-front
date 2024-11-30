import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { codeVerificationApi } from "../../apis/codeVerficationApi.ts"; // Ensure the correct path and filename
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CodeVerification = () => {
  const { signUpToken, code } = useParams();
  const navigate = useNavigate(); // Initialize navigation
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for showing notifications
  const [loading, setLoading] = useState(true); // Loading state
  const hasVerifiedRef = useRef(false); // Ref to track if verification has been done

  const handleCodeVerification = async () => {
    try {
      const response = await codeVerificationApi({ signUpToken, code });
      setLoading(false);
      enqueueSnackbar("ثبت نام شما با موفقیت صورت گرفت.", {
        variant: "success",
      });

      // Redirect to login page after successful verification
      navigate("/login");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("تکمیل ثبت نام شما با خطا مواجه شد.", {
        variant: "error",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    if (signUpToken && code && !hasVerifiedRef.current) {
      hasVerifiedRef.current = true; // Set the flag to prevent future calls
      handleCodeVerification();
    }
  }, [signUpToken, code]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      m={2}
    >
      {loading ? <CircularProgress /> : <h1>Code Verification</h1>}
    </Box>
  );
};

export default CodeVerification;
