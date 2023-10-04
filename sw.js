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
