using {my.app as my} from '../db/schema';


service CustomerService{
    entity Customer as projection on my.Customer;
}