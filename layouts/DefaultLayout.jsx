import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        transparentScroll={true}
        whiteBackground={true}
        hasShadow={false}
      />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
