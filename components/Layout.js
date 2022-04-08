import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="flex-grow pt-16 md:pt-20 bg-sky-500">{children}</div>
    </>
  );
}

export default Layout;
