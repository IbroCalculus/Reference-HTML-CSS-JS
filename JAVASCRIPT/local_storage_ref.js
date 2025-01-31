/*

NB: ALSO: Session_storage.js and Cookies.js

console.log(window.location.origin);


What is Local Storage?

Local Storage in JavaScript is a powerful way to store data on a user's browser that persists even after the browser is closed.
Local Storage allows you to store key-value pairs in the browser. Every data is stored in string format
It has no expiration date (unlike sessionStorage, which lasts until the browser is closed).

*/
// NB: Access its properties in console via window.localStorage

/*
=================== BASIC METHODS ===================
The localStorage object provides the following methods:

setItem(key, value): Stores a value under a specified key.
getItem(key): Retrieves the value associated with a key.
removeItem(key): Removes a key-value pair by its key.
clear(): Clears all data from local storage.
length: Returns the number of items stored.
 */

/*
=============== How to Use Local Storage =================

------ 1. Storing Data: ----------
localStorage.setItem("name", "Ibrahim");
localStorage.setItem("age", "45");
localStorage.setItem("roles", JSON.stringify(["admin", "staff", "developer"]));

console.log("Data stored successfully!")


------ 2. Retrieving Data: ----------
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(`Name: ${name}, Age: ${age}`);

// Retrieve complex data (e.g., arrays or objects)
let roles = JSON.parse(localStorage.getItem("roles"));
console.log("Roles:", roles);


------ 3. Removing Data: ----------
localStorage.removeItem("age"); // Removes the "age" key
console.log("Age removed!");


------ 4. Clearing All Data: ----------
localStorage.clear(); // Clears all stored data
console.log("All data cleared!");


------ 5. Updating Data: ----------
Use localStorage.setItem() to overwrite the existing value for a specific key.

localStorage.setItem("name", "Ibrahim");
localStorage.setItem("name", "Ahmed");

console.log(localStorage.getItem("name")); 

 */