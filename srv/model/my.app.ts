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

export enum Entity {
  Customer = "my.app.Customer",
}

export enum SanitizedEntity {
  Customer = "Customer",
}
