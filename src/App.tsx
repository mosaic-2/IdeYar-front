import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/useTheme";
import "./assets/font.css";
import "./LanguageConfig/i18n";
import ColorDisplay from "./components/color/ColorDisplay";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PageLayout from "./components/layouts/PageLayout";
import HelloWorldStickyLeft from "./components/HelloWorldStickyLeft";
import Profile from "./components/profile/Profile";
import PostPage from "./pages/PostPage/PostPage";
import CodeVerification from "./components/codeVerfication/CodeVerfication";
import RegisterPage from "./components/registerPage/RegisterPage";
import PostPreview from "./pages/PreviewPage/PostPreview";
import ChangePassword from "./components/changePass/ChangePassword";
import ChangeEmail from "./components/changeEmail/ChangeEmail";
import ForgotPassword from "./components/forgotPass/ForgotPassword";
import SearchPage from "./components/SearchPage/SearchPage";
import CreatePost from "./components/createPostPage/CreatePost";
import ChangeEmailConfirm from "./components/changEmailVerification/ChangeEmailVerification";
import ForgotChangePassword from "./components/forgotPassNewPass/ForgotPasswordNewPass";
import FundPage from "./components/fund/FundPage";

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
        <Route
          path="/post"
          element={
            <PageLayout>
              <PostPage />
            </PageLayout>
          }
        />
        <Route
          path="/create-post"
          element={
            <PageLayout>
              <CreatePost />
            </PageLayout>
          }
        />
        <Route path="/hello" element={<HelloWorldStickyLeft />} />
        <Route path="/preview-post" element={<PostPreview />} />
        <Route
          path="/code-verification/:signUpToken/:code"
          element={
            <PageLayout>
              <CodeVerification />
            </PageLayout>
          }
        />
        <Route
          path="/change-pass"
          element={
            <PageLayout>
              <ChangePassword />
            </PageLayout>
          }
        />
        <Route
          path="/change-email"
          element={
            <PageLayout>
              <ChangeEmail />
            </PageLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PageLayout>
              <ForgotPassword />
            </PageLayout>
          }
        />
        <Route
          path="/change-email/:token"
          element={
            <PageLayout>
              <ChangeEmailConfirm />
            </PageLayout>
          }
        />
        <Route
          path="/search/:object"
          element={
            <PageLayout>
              <SearchPage />
            </PageLayout>
          }
        />
        <Route
          path="/forget-password/:token"
          element={
            <PageLayout>
              <ForgotChangePassword />
            </PageLayout>
          }
        />
        <Route
          path="/fund"
          element={
            <PageLayout>
              <FundPage />
            </PageLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
