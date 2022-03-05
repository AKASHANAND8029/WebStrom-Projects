var Customer = /** @class */ (function () {
    //Creating a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//Constructing an instance using constructor
var myCustomer = new Customer("Akash", "Anand");
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
