class Customer{
    //properties
    private firstName: string;
    private lastName: string;

    //Creating a constructor

    constructor(theFirst: string, theLast: string) {
    this.firstName=theFirst;
    this.lastName=theLast;
    }

}
//Constructing an instance using constructor
let myCustomer=new Customer("Akash","Anand");
console.log(myCustomer);
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);

/*
//Constructing an instance using new keyword
let myCustomer=new Customer();
myCustomer.firstName="Akash";
myCustomer.lastName="Anand";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/



