import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../mainFooter/Footer";
import { Box } from "@mui/material";

interface Prop {
  children: ReactNode;
}

const PageLayout = ({ children }: Prop) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
