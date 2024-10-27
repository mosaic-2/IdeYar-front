import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";

const initialState: User = {
  id: null,
  username: null,
  email: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(_state, action: PayloadAction<User>) {
      return action.payload;
    },
    clearUser(_state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
