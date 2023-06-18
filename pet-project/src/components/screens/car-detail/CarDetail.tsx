import React, { FC } from "react";
import { ICarDataSingle } from "@/interfaces/car.interface";
import Layout from "@/components/layout/Layout";
import CarItem from "@/components/pages/car/CarItem";

import styles from "./CarDetail.module.scss";

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  return (
    <Layout title={car?.name} description="Car">
      <div className={styles.container}>
        <CarItem car={car} />
      </div>
    </Layout>
  );
};

export default CarDetail;
