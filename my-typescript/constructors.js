var Person = /** @class */ (function () {
    function Person(_firstName, _lastname) {
        this._firstName = _firstName;
        this._lastname = _lastname;
    }
    return Person;
}());
var myPerson = new Person("Akash", "Anand");
myPerson.firstName = "Akhil";
console.log(myPerson.firstName);
console.log(myPerson.lastName);
