import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({
  children,
  title = "Lethal Weapon Fishing Charters - Unforgettable Fishing Adventures",
  description = "Experience the thrill of deep sea fishing with our professional charter services. Book your fishing adventure today!",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
