import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    jwtToken: null,
    refreshToken: null,
};
const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSession(state, action) {
            return { ...state, ...action.payload };
        },
        clearSession(state) {
            return initialState;
        },
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        },
        setJwtToken(state, action) {
            state.jwtToken = action.payload;
        },
        setRefreshToken(state, action) {
            state.refreshToken = action.payload;
        },
    },
});
export const { setSession, clearSession, setLoggedIn, setJwtToken, setRefreshToken, } = sessionSlice.actions;
export default sessionSlice.reducer;
