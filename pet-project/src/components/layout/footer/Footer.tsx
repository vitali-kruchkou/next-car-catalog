import React, { FC } from "react";
import { getFullYear } from "@/utils";

const Footer: FC = () => {
  const year = getFullYear();

  return <div>Pet project &copy; {year}</div>;
};

export default Footer;
