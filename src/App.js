import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import RegisterPage from "./components/RegisterPage/RegisterPage";
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
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(PageLayout, { children: _jsx(LandingPage, {}) }) }), _jsx(Route, { path: "/color", element: _jsx(ColorDisplay, {}) }), _jsx(Route, { path: "/register", element: _jsx(PageLayout, { children: _jsx(RegisterPage, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(PageLayout, { children: _jsx(LoginPage, {}) }) }), _jsx(Route, { path: "/profile", element: _jsx(PageLayout, { children: _jsx(Profile, {}) }) }), _jsx(Route, { path: "/post/:id", element: _jsx(PageLayout, { children: _jsx(PostPage, {}) }) }), _jsx(Route, { path: "/create-post", element: _jsx(PageLayout, { children: _jsx(CreatePost, {}) }) }), _jsx(Route, { path: "/hello", element: _jsx(HelloWorldStickyLeft, {}) }), _jsx(Route, { path: "/code-verification/:signUpToken/:code", element: _jsx(PageLayout, { children: _jsx(CodeVerification, {}) }) }), _jsx(Route, { path: "/change-pass", element: _jsx(PageLayout, { children: _jsx(ChangePassword, {}) }) }), _jsx(Route, { path: "/change-email", element: _jsx(PageLayout, { children: _jsx(ChangeEmail, {}) }) }), _jsx(Route, { path: "/forgot-password", element: _jsx(PageLayout, { children: _jsx(ForgotPassword, {}) }) }), _jsx(Route, { path: "/change-email/:token", element: _jsx(PageLayout, { children: _jsx(ChangeEmailConfirm, {}) }) }), _jsx(Route, { path: "/search/:object?", element: _jsx(PageLayout, { children: _jsx(SearchPage, {}) }) }), _jsx(Route, { path: "/forget-password/:token", element: _jsx(PageLayout, { children: _jsx(ForgotChangePassword, {}) }) }), _jsx(Route, { path: "/fund", element: _jsx(PageLayout, { children: _jsx(FundPage, {}) }) })] }) }));
}
export default App;
