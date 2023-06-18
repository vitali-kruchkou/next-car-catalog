import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <Layout title="404">
      <Head>
        <title>Not found</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Image src="/404.png" alt="" width={450} height={433} priority />
      </div>
    </Layout>
  );
};

export default NotFound;
