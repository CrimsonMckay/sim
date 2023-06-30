using {  API_BUSINESS_PARTNER as bupa } from '../srv/external/API_BUSINESS_PARTNER';
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


entity Suppliers as projection on bupa.A_BusinessPartner {
        key BusinessPartner as ID,
        BusinessPartnerFullName as fullName,
        BusinessPartnerIsBlocked as isBlocked,
}