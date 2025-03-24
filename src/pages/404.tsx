import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <Head>
        <title>Page Not Found | Lethal Weapon Fishing</title>
        <meta name="description" content="Page not found - Lethal Weapon Fishing Adventures" />
      </Head>
      
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Return to Homepage
        </Link>
        
        <div className="mt-12">
          <p className="text-gray-500">
            If you believe this is an error, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
