lstname = [];
html = "";

console.log("Local Storage");

let allCountry = JSON.parse(localStorage.getItem("allCountry"));

allCountry.forEach(element => {
    lstname.push(element["name"]["common"]);
})
lstname.sort();

lstname.forEach(element => {
    html += element + " - ";
})
document.querySelector("body").innerHTML = html;
