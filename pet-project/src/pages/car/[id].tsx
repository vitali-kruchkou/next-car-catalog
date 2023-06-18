import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

import { ICarDataSingle, ICarGetPaths } from "@/interfaces/car.interface";
import CarDetail from "@/components/screens/car-detail/CarDetail";
import { CarService } from "@/services/car.service";

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
  return (
    <div>
      <CarDetail car={car} />
    </div>
  );
};

//SSG

export const getStaticPaths: GetStaticPaths<ICarGetPaths> = async () => {
  const cars = await CarService.getAll();
  return {
    paths: cars?.map((car) => ({
      params: {
        id: String(car?.id),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
  params,
}) => {
  const car = await CarService.getById(String(params?.id));
  return {
    props: { car },
    revalidate: 60,
  };
};

export default CarDetailPage;
