import { Gender } from "./my.app";

export interface Customer {
  ID: number;
  Fullname: string;
  age: number;
  gender: Gender;
  createdAt?: Date;
}

export interface Suppliers {
  ID: string;
  fullName: string;
  isBlocked: boolean;
}

export enum FuncTester {
  name = "tester",
}

export type FuncTesterReturn = string[];

export enum Entity {
  Customer = "CustomerService.Customer",
  Suppliers = "CustomerService.Suppliers",
}

export enum SanitizedEntity {
  Customer = "Customer",
  Suppliers = "Suppliers",
}
