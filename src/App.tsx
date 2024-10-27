import { Route, Routes } from "react-router-dom";
import { setupUserInfo } from "./actions/setupAction";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
import Header from "./components/header/Header";
import "./assets/font.css";
import ColorDisplay from "./components/color/ColorDisplay";
import HelloWorld from "./components/HelloWorld";

function App() {
  setupUserInfo();
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HelloWorld />
            </>
          }
        />
        <Route path="/color" element={<ColorDisplay />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
