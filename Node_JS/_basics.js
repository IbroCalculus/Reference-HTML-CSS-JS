/*
Node.js is an open source server environment which uses JavaScript on the server.
It uses asynchronous programming!


In cmd: node (Shows the node version and enter the node interactive mode > )
Also .js extension, its still JavaScript

--- Runing the node project:
- Open file location in terminal, then run the command: node _basics.js
- Must stop and rerun the command after changes (Ctrl-C)

--- Using npm to create a project ---
- Create a folder for the project, ie customers. 
- Within folder directory in terminal, 2 ways:
 1. run the command: npm install and follow the steps.
 2. run the command: npm init -y (No steps, just take everything as default) 
Inside the project folder, we will have package.json file created.
NB: preferably app.js should be in src folder. Modify main package.js to suit that. CHECK: customers project.
I removed test: '...' and replaced with "start": "node src/app.js" within "scripts"
 
To run the project, use command: npm run start (start because it is what is used within "scripts" folder)


*/

console.log("Hello NodeJs");