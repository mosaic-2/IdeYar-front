import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const checkLogin = () => {
  const session = useSelector((state: RootState) => state.session);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!session.isLoggedIn) {
      enqueueSnackbar(
        "برای استفاده از این صفحه ابتدا وارد حساب کاربری خود شوید",
        { variant: "warning" }
      );
      navigate("/");
    }
  }, [session.isLoggedIn]);
};

export default checkLogin;
