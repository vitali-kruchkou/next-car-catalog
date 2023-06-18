import React, { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";

import { Titillium_Web } from "@next/font/google";

import Header from "./header/Header";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";

//Helping for CSR
const DynamicFooter = dynamic(() => import("./footer/Footer"), { ssr: false });

const titillium = Titillium_Web({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--titillium",
});

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    // <div className={titillium.variable}>
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
      <DynamicFooter />
    </Meta>
    // </div>
  );
};

export default Layout;
