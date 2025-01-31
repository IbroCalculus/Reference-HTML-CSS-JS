

export class Person{

    amount = 56;

    constructor(fName, sName, age){
        this.fName = fName;
        this.sName = sName;
        this.age = age;

        let msg = `Person info: ${this.fName} ${this.sName} ${this.age}`;
        console.log(msg);
    }
}