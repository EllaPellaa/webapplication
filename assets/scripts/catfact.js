async function getCatFacts() {
  try{
    const url="https://catfact.ninja/facts";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    for (let i = 0; i < data.data.length; i++) {
      document.getElementById("catfacts").innerHTML += "<li>" + data.data[i].fact + "</li>";
    }

    return data;
  } catch(error) {
    console.log("Virhe:" + error);
  }
  
}

getCatFacts();