import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
const Example = dynamic(() => import("../components/Example"));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next app</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Example />
    </div>
  );
};

export default Home;