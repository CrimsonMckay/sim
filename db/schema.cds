namespace my.app;

entity Customer {
  key ID: Integer;
  Fullname: String;
  age: Integer;
gender:gender;
  createdAt: DateTime;
}




type gender:String enum{
    male;
    female
}