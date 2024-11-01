import { Route, Routes } from "react-router-dom";
import { setupUserInfo } from "./actions/setupAction";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
// import Header from "./components/header/Header";
import "./assets/font.css";
import ColorDisplay from "./components/color/ColorDisplay";
// import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/header/Header";
import Categories from "./components/categories/Categories";
import HomePage from "./components/homePage/HomePage";
import IntroductionSection from "./components/introduction/Introduction";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import "./LanguageConfig/i18n";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  // setupUserInfo();
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header2 />
              <Categories />
              <HomePage />
              <IntroductionSection />
              <Footer />
            </>
          }
        />
        <Route path="/color" element={<ColorDisplay />} />
        <Route
          path="/register"
          element={
            <>
              <Header2 />
              <RegisterPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header2 />
              <LoginPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
