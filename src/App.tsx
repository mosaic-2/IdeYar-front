import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
import "./assets/font.css";
import ColorDisplay from "./components/color/ColorDisplay";
import Categories from "./components/categories/Categories";
import HomePage from "./components/homePage/HomePage";
import IntroductionSection from "./components/homePage/Introduction";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import "./LanguageConfig/i18n";
import LoginPage from "./components/LoginPage/LoginPage";
import PageLayout from "./components/layouts/PageLayout";
import HelloWorldStickyLeft from "./components/HelloWorldStickyLeft";

function App() {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Categories />
              <HomePage />
              <IntroductionSection />
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
        <Route path="/hello" element={<HelloWorldStickyLeft />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
