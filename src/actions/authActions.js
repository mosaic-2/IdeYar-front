import { clearUser, setUser } from "../store/userSlice";
import { setLoggedIn } from "../store/sessionSlice";
export const handleLogin = (dispatch, response) => {
    const user = {
        id: response.id,
        username: response.username,
        email: response.email,
        role: response.role,
    };
    dispatch(setUser(user));
    dispatch(setLoggedIn(true));
};
export const handleLogout = (dispatch) => {
    dispatch(clearUser());
    dispatch(setLoggedIn(false));
};
