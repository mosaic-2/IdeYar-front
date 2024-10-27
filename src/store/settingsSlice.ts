import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Settings from "../models/Settings";

const initialState: Settings = {
  darkMode: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings(_state, action: PayloadAction<Settings>) {
      return action.payload;
    },
    clearSettings(_state) {
      return initialState;
    },
    setDarkMode(_state, action: PayloadAction<boolean>) {
      _state.darkMode = action.payload;
    },
  },
});

export const { setSettings, clearSettings, setDarkMode } =
  settingsSlice.actions;
export default settingsSlice.reducer;
