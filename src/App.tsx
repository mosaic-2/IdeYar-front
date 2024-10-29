import { Route, Routes } from "react-router-dom";
import { setupUserInfo } from "./actions/setupAction";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
// import Header from "./components/header/Header";
import "./assets/font.css";
import ColorDisplay from "./components/color/ColorDisplay";
// import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/header/Header_2";
import Categories from "./components/categories/Categories";
import HomePage from "./components/homePage/HomePage";
import IntroductionSection from "./components/introduction/Introduction";

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
              <Header2 />
              <Categories />
              <HomePage />
              {/* <Header />   */}
              {/* <HelloWorld /> */}
              <IntroductionSection />
              <Footer />
            </>
          }
        />
        <Route path="/color" element={<ColorDisplay />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
