import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

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
