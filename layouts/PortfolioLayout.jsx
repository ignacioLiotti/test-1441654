import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PortfolioLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        transparentScroll={false}
        whiteBackground={true}
        hasShadow={true}
      />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default PortfolioLayout;
