import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React from "react";

import Home from "@/components/screens/home/Home";
import { ICarData } from "@/interfaces/car.interface";
import { CarService } from "@/services/car.service";

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return <Home cars={cars} />;
};

//SSG
export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAll();
  return {
    props: { cars },
    revalidate: 60,
  };
};

//SSR
// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarService.getAll();

//   return {
//     props: { cars },
//   };
// };

export default HomePage;
