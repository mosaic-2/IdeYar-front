import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getAccountApi } from "../apis/accountApi";
import { handleLogin, handleLogout } from "./authActions";
import axios from "axios";
import { useEffect } from "react";

export const setupUserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const session = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (!session.isLoggedIn) {
      getAccountApi()
        .then((res) => {
          console.log("getAccountApi response:", res);
          handleLogin(dispatch, res.data);
        })
        .catch((err) => {
          console.log("getAccountApi error: ", err);
          if (axios.isAxiosError(err)) {
            if (err.status === 401) handleLogout(dispatch);
          }
        });
    }
  }, []);
};
