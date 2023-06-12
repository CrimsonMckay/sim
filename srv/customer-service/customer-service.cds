using {my.app as my} from '../../db/schema';


service CustomerService  @(path : '/customer'){
    entity Customer as projection on my.Customer;

    function tester() returns array of String;
}


//tester(personIdExternal='559999e9')d