import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Session from "../models/Session";

const initialState: Session = {
  isLoggedIn: false,
  jwtToken: "",
  refreshToken: "",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<Session>) {
      return { ...state, ...action.payload };
    },
    clearSession(state) {
      return initialState;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setJwtToken(state, action: PayloadAction<string>) {
      state.jwtToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
  },
});

export const {
  setSession,
  clearSession,
  setLoggedIn,
  setJwtToken,
  setRefreshToken,
} = sessionSlice.actions;
export default sessionSlice.reducer;
