import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

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
