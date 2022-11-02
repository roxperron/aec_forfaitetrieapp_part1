import { Lodging } from "./lodging";

export interface Package {
  id?: number;
  code: string;
  name: string;
  description: string;
  startdate: string;
  enddate:string;
  price: number;
  lodging: Lodging;
  categories: string[];
}
