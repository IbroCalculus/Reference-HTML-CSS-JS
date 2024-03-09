
let input_el = document.getElementById("input-el");
let input_btn = document.getElementById("input-btn");
let myLeads = []

let ul_el = document.getElementById("ul-el");


function runExtension(){
    ul_el.innerHTML = "";
    let inputData = input_el.value;
    myLeads.unshift(inputData)
    // myLeads += inputData
    for(let i=0; i<myLeads.length; i++){
        ul_el.innerHTML += `<li><a href="http://www.${myLeads[i]}.com" target="_blank"> https://www.${myLeads[i]}.com </a></li>`;

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ul_el.append(li);
    }
    console.log(inputData);
    input_el.value = "";

}

input_btn.addEventListener("click", runExtension)