import { Gender } from "./my.app";

export interface Customer {
  ID: number;
  Fullname: string;
  age: number;
  gender: Gender;
  createdAt?: Date;
}

export enum FuncTester {
  name = "tester",
}

export type FuncTesterReturn = string[];

export enum Entity {
  Customer = "CustomerService.Customer",
}

export enum SanitizedEntity {
  Customer = "Customer",
}
