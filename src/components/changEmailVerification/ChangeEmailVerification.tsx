import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { changeEmailConfirmApi } from "../../apis/changeEmailVerificationApi.ts"; // Ensure the correct path and filename
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ChangeEmailConfirm = () => {
  const { token } = useParams(); // Retrieve token from the route parameters
  const navigate = useNavigate(); // Initialize navigation
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for showing notifications
  const [loading, setLoading] = useState(true); // Loading state
  const hasVerifiedRef = useRef(false); // Ref to track if verification has been done

  const handleChangeEmailConfirm = async () => {
    try {
      console.log("Starting email confirmation process...");

      if (!token) {
        console.error("Token is missing.");
        throw new Error("Token is required");
      }

      console.log("Sending API request with token:", token);
      const response = await changeEmailConfirmApi({ token });

      console.log("API response received:", response);
      setLoading(false);
      enqueueSnackbar("ایمیل شما با موفقیت تایید شد.", {
        variant: "success",
      });

      console.log("Navigating to the profile page...");
      navigate("/profile");
    } catch (error) {
      console.error("Error during email confirmation:", error);
      setLoading(false);
      enqueueSnackbar("تایید ایمیل شما با خطا مواجه شد", {
        variant: "error",
      });

      console.log("Navigating to the home page due to error...");
      navigate("/");
    }
  };

  useEffect(() => {
    if (token && !hasVerifiedRef.current) {
      console.log("Token detected:", token);
      hasVerifiedRef.current = true; // Set the flag to prevent future calls
      handleChangeEmailConfirm();
    } else if (!token) {
      console.warn("No token found in URL parameters.");
    }
  }, [token]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      m={2}
    >
      {loading ? <CircularProgress /> : <h1>Email Confirmation</h1>}
    </Box>
  );
};

export default ChangeEmailConfirm;
