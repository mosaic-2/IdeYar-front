import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: null,
    username: null,
    email: null,
    role: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(_state, action) {
            return action.payload;
        },
        clearUser(_state) {
            return initialState;
        },
    },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
