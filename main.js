async function PrendreAllCountry() {

    const myInit = {
        method: 'GET',
        headers: {},
        mode: 'cors',
        cache: 'no-cache',
    }
  
    let response = await fetch("https://restcountries.com/v3.1/all", myInit);
  
    if (response.ok) {
        let text = await response.text();
        return JSON.parse(text);
    }
    else {
        let text = await response.text();
        throw new Error(`${response.status} : ${text}`);
    }
  }
  

window.addEventListener("load", (event) => {

    let lstname = [];
    let html = "";

    let timeFetch = Date.now() - localStorage.getItem("date");
    let DifferenceInDays = timeFetch / (1000 * 3600 * 24);

    if(localStorage.getItem("allCountry") == null || DifferenceInDays > 30) {

    console.log("Requete à l'API");

    PrendreAllCountry()
        .then(resultat => {
            resultat.forEach(element => {
                lstname.push(element["name"]["common"]);
            })
            lstname.sort();

            lstname.forEach(element => {
                html += element + " - ";
            })
        }
        )
        .catch(error => alert(error))
    }
    else {

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
    }
});

