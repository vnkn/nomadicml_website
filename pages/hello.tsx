import React from 'react';
import Head from 'next/head';

export default function HelloPage() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-5xl font-bold">hello world</h1>
      </div>
    </>
  );
} 