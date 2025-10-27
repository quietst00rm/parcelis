import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
