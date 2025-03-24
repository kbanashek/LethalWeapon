import React from "react";
import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Lethal Weapon Fishing Charters</title>
      </Head>

      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-ocean-blue mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you've ventured into uncharted waters. The page you're
            looking for doesn't exist.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
