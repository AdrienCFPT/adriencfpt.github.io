self.addEventListener("fetch", (e) => {
    console.log(`[Service Worker] Fetched resource ${e.request.url}`);
        e.then(resultat => {
            localStorage.clear();
            localStorage.setItem("allCountry", JSON.stringify(resultat));
            localStorage.setItem("date", Date.now());
        }
        )
        .catch(error => alert(error))
   });