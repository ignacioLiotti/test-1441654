import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ExtraLayout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        transparentScroll={false}
        whiteBackground={false}
        hasShadow={false}
      />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default ExtraLayout;
