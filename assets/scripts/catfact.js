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
      let timeout = setTimeout(playvid, 3000);
    }

    return data;
  } catch(error) {
    console.log("Virhe:" + error);
  }
  
}

getCatFacts();

function playvid() {
  document.getElementById("catvideo").play();
}
