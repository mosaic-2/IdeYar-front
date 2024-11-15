import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
