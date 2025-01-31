/*
NB: ALSO: local_storage.js and Cookies.js

What is Session Storage?

Session Storage in JavaScript is a powerful way to store data temporarily on a user's browser.
Data in sessionStorage is stored as key-value pairs in string format and is unique to a specific browser tab or window.
It lasts only as long as the browser tab is open. Once the tab is closed, all data in sessionStorage is automatically cleared.
*/

// NB: Access its properties in the console via window.sessionStorage

/*
=================== BASIC METHODS ===================
The sessionStorage object provides the following methods:

setItem(key, value): Stores a value under a specified key.
getItem(key): Retrieves the value associated with a key.
removeItem(key): Removes a key-value pair by its key.
clear(): Clears all data from session storage.
length: Returns the number of items stored.
*/

/*
=============== How to Use Session Storage =================

------ 1. Storing Data: ----------
sessionStorage.setItem("name", "Ibrahim");
sessionStorage.setItem("age", "45");
sessionStorage.setItem("roles", JSON.stringify(["admin", "staff", "developer"]));

console.log("Data stored successfully in sessionStorage!");

------ 2. Retrieving Data: ----------
let name = sessionStorage.getItem("name");
let age = sessionStorage.getItem("age");

console.log(`Name: ${name}, Age: ${age}`);

// Retrieve complex data (e.g., arrays or objects)
let roles = JSON.parse(sessionStorage.getItem("roles"));
console.log("Roles:", roles);

------ 3. Removing Data: ----------
sessionStorage.removeItem("age"); // Removes the "age" key
console.log("Age removed from sessionStorage!");

------ 4. Clearing All Data: ----------
sessionStorage.clear(); // Clears all stored data
console.log("All sessionStorage data cleared!");

------ 5. Updating Data: ----------
Use sessionStorage.setItem() to overwrite the existing value for a specific key.

sessionStorage.setItem("name", "Ibrahim");
sessionStorage.setItem("name", "Ahmed");

console.log(sessionStorage.getItem("name")); // Output: Ahmed
*/

/*
Example Using Objects in Session Storage:
Storing, retrieving, and logging a list of todos
*/