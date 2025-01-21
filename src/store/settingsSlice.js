import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    darkMode: null,
};
const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSettings(_state, action) {
            return action.payload;
        },
        clearSettings(_state) {
            return initialState;
        },
        setDarkMode(_state, action) {
            _state.darkMode = action.payload;
        },
    },
});
export const { setSettings, clearSettings, setDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
