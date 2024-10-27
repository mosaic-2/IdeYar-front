import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Session from "../models/Session";

const initialState: Session = {
  isLoggedIn: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(_state, action: PayloadAction<Session>) {
      return action.payload;
    },
    clearSession(_state) {
      return initialState;
    },
    setLoggedIn(_state, action: PayloadAction<boolean>) {
      _state.isLoggedIn = action.payload;
    },
  },
});

export const { setSession, clearSession, setLoggedIn } = sessionSlice.actions;
export default sessionSlice.reducer;
