import { AppDispatch } from "../store/store";
import { clearUser, setUser } from "../store/userSlice";
import { setLoggedIn } from "../store/sessionSlice";
import AccountResponse from "../models/AccountResponse";
import User from "../models/User";

export const handleLogin = (
  dispatch: AppDispatch,
  response: AccountResponse
) => {
  const user: User = {
    id: response.id,
    username: response.username,
    email: response.email,
    role: response.role,
  };
  dispatch(setUser(user));
  dispatch(setLoggedIn(true));
};

export const handleLogout = (dispatch: AppDispatch) => {
  dispatch(clearUser());
  dispatch(setLoggedIn(false));
};
