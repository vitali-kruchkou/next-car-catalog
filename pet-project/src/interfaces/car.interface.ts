import { ParsedUrlQuery } from "querystring";

export interface ICar {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ICarData {
  cars: ICar[];
}

export interface ICarDataSingle {
  car: ICar;
}

export interface ICarGetPaths extends ParsedUrlQuery {
  id: string;
}
