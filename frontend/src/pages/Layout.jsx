import React from "react";
import "../styles/globals.css";
import "../styles/responsive.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main">
        <a href="#main-content" className="skip-link">
          Menuju ke konten
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
