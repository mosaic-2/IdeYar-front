import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
const PageLayout = ({ children }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), children, _jsx(Footer, {})] }));
};
export default PageLayout;
