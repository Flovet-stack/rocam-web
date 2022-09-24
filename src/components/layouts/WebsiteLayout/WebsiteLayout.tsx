import { ReactNode } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./website-layout.scss";

interface WebsiteLayoutProps {
  children: ReactNode;
}

const WebsiteLayout = (props: WebsiteLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
