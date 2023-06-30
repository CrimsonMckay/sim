export enum Gender {
  male,
  female,
}

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

export enum Entity {
  Customer = "my.app.Customer",
  Suppliers = "my.app.Suppliers",
}

export enum SanitizedEntity {
  Customer = "Customer",
  Suppliers = "Suppliers",
}
