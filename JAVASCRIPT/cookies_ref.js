/*
NB: ALSO: Local_storage.js and Session_storage.js

console.log(window.location.origin);

What are Cookies?

Cookies in JavaScript are small pieces of data stored on the user's browser by a website.
Cookies can be used for session management, storing preferences, or tracking user activity.
They can have an expiration date, and unlike localStorage and sessionStorage, they are automatically sent with HTTP requests to the server.
*/

// NB: Access cookies via `document.cookie`

/*
=================== BASIC METHODS ===================
Cookies in JavaScript do not have built-in methods like `localStorage` or `sessionStorage`. 
Instead, you use `document.cookie` to create, read, or delete cookies.

Set a Cookie:
document.cookie = "key=value; expires=DATE; path=PATH";

Read a Cookie:
document.cookie // Retrieves all cookies as a single string

Delete a Cookie:
Set the cookie's `expires` date to a past date
document.cookie = "key=value; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

*/

/*
=============== How to Use Cookies =================

------ 1. Storing Data: ----------
Set cookies using `document.cookie` with key-value pairs.
You can also include optional attributes like `expires`, `path`, and `SameSite`.
*/

document.cookie = "name=Ibrahim; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "age=45; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "roles=" + encodeURIComponent(JSON.stringify(["admin", "staff", "developer"])) + "; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

console.log("Cookies stored successfully!");

/*
------ 2. Retrieving Data: ----------
Retrieve all cookies as a single string using `document.cookie`.
You'll need to parse the string to extract specific keys and values.
*/

function getCookieValue(key) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split("=");
        if (cookieKey === key) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null; // Return null if the key is not found
}

let name = getCookieValue("name");
let age = getCookieValue("age");
let roles = JSON.parse(getCookieValue("roles")); // Parse the JSON string

console.log(`Name: ${name}, Age: ${age}`);
console.log("Roles:", roles);

/*
------ 3. Removing Data: ----------
To delete a cookie, set its `expires` attribute to a past date.
*/

document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
console.log("Age cookie removed!");

/*
------ 4. Clearing All Data: ----------
JavaScript does not have a built-in method to clear all cookies. 
You need to manually delete each cookie by setting its `expires` to a past date.
*/

function clearAllCookies() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const key = cookie.split("=")[0];
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}

clearAllCookies();
console.log("All cookies cleared!");

/*
------ 5. Updating Data: ----------
To update a cookie, simply overwrite it by setting it again with the same key but a new value.
*/

document.cookie = "name=Ibrahim; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "name=Ahmed; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

console.log(getCookieValue("name")); // Output: Ahmed
