class Person{
    constructor(private _firstName: string,
                private _lastname: string) {
    }

}
let myPerson=new Person("Akash","Anand");
myPerson._firstName="Akhil";
console.log(myPerson);
