function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.responseText);
      }
    xhttp.open("GET", "flowerinformation.json", true);
    xhttp.send();
  }

  loadDoc();