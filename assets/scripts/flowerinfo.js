import Flower from "./flowerclass.js";

let flowers = [];

flowers.push(new Flower("cosmos", "cosmos.jpg", ["june", "july"]));
flowers.push(new Flower("dandelion", "dandelion.jpg", ["may", "june", "july"]));
flowers.push(new Flower("forget-me-not", "forget-me-not.jpg", ["april", "may"]));
flowers.push(new Flower("hydrangea", "hydrangea.jpg", ["may", "june", "july"]));
flowers.push(new Flower("lily of the valley", "lilyofthevalley.jpg", ["may"]));
flowers.push(new Flower("rose", "rose.jpg", ["may", "june", "july", "august", "september", "october"]));

let flowerinfotable = document.getElementById("flowerinfo");

let text = "";
var formData;

text += "<tbody>";

for (let i = 0; i < flowers.length; i++) {
    let bloomsin = "";
    for (let j = 0; j < flowers[i].blooms.length; j++) {
        bloomsin += flowers[i].blooms[j];
        if(j !== (flowers[i].blooms.length - 1)) {
            bloomsin += ", ";
        }
    }
    text += `<tr>
    <td>` + flowers[i].name + `</td>
    <td>` + bloomsin + `</td></tr>`;
}

text += "</tbody>"

flowerinfotable.innerHTML += text;

//Form data handling

document.querySelector('#submitbtn').addEventListener('click', filterFlowers)

function filterFlowers() {
    //Handle submit
    formData = document.getElementById("selectedmonth").value;

    let filteredFlowers = flowers.filter(checkMonth);
    filteredFlowers.sort();

    text += `<thead>
                <tr>
                    <th>Name</th>
                    <th>Blooms in</th>
                </tr>
            </thead>
            <tbody>`;

    for (let i = 0; i < filteredFlowers.length; i++) {
        let bloomsin = "";
        for (let j = 0; j < filteredFlowers[i].blooms.length; j++) {
            bloomsin += filteredFlowers[i].blooms[j];
            if(j !== (filteredFlowers[i].blooms.length - 1)) {
                bloomsin += ", ";
            }
        }
        text += `<tr>
        <td>` + filteredFlowers[i].name + `</td>
        <td>` + bloomsin + `</td></tr>`;
    }

    if(filteredFlowers.length === 0) {
        text += "<p>No flowers in table bloom in the selected month.</p>"
    }

    text += "</tbody>"

    document.getElementById("filteredtable").innerHTML = text;
} 

function checkMonth(flower) {
    console.log(flower);
    for (let i = 0; i < flower.blooms.length; i++) {
        if(flower.blooms[i] === formData) {
            console.log(flower.blooms[i]);
            return true;
        } else {
            console.log("N" + flower.blooms[i]);
            return false;
        }
    }
}