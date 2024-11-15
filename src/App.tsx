import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
import "./assets/font.css";
import ColorDisplay from "./components/color/ColorDisplay";
import LandingPage from "./components/landingPage/LandingPage";

import RegisterPage from "./components/registerPage/RegisterPage";
import "./LanguageConfig/i18n";
import LoginPage from "./components/LoginPage/LoginPage";
import PageLayout from "./components/layouts/PageLayout";
import HelloWorldStickyLeft from "./components/HelloWorldStickyLeft";
import Profile from "./components/profile/Profile";
function App() {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <LandingPage />
            </PageLayout>
          }
        />
        <Route path="/color" element={<ColorDisplay />} />
        <Route
          path="/register"
          element={
            <PageLayout>
              <RegisterPage />
            </PageLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PageLayout>
              <LoginPage />
            </PageLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />
        <Route path="/hello" element={<HelloWorldStickyLeft />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
