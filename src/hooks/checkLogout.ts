import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearSession } from "../store/sessionSlice";
import { useSnackbar } from "notistack";
import { RootState } from "../store/store";

const checkLogout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSelector((state: RootState) => state.session);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const loggOut = searchParams.get("logout");

    if (loggOut === "true") {
      if (session.isLoggedIn)
        enqueueSnackbar("لطفا دوباره وارد حساب کاربری خود شوید", {
          variant: "error",
        });
      else
        enqueueSnackbar("لطفا وارد حساب کاربری خود شوید", {
          variant: "error",
        });
      dispatch(clearSession());

      const newUrl = `${window.location.pathname}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, [location.search]);
};

export default checkLogout;
