// Assume have a file, person.js with class Person want to import into index.js
// NB: Both person.js and index.js are assumed to be inside same directory

// === IN person.js ===

/*

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

 */


// ==== IN index.js ===

/*
import { Person } from './person.js';
var person1 = new Person("Jone", "Smith", 56);
 */


// ==== IN index.html (where basics.js is used) ===
/*
    <script type="module" src="index.js"></script>
 */
