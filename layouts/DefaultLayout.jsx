import React from "react";
import Head from "next/head";
import NewNavbar from "../components/NewNavbar";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NewNavbar
        transparentScroll={true}
        whiteBackground={false}
        hasShadow={false}
      />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
