import Flower from "./flowerclass.js";

let flowers = [];

flowers.push(new Flower("cosmos", "cosmos.jpg", ["june", "july"]));
flowers.push(new Flower("dandelion", "dandelion.jpg", ["may", "june", "july"]));
flowers.push(new Flower("forget-me-not", "forget-me-not.jpg", ["april", "may"]));
flowers.push(new Flower("hydrangea", "hydrangea.jpg", ["may", "june", "july"]));
flowers.push(new Flower("lily of the valley", "lilyofthevalley.jpg", ["may"]));
flowers.push(new Flower("rose", "rose.jpg", ["may", "june", "july", "august", "september", "october"]));

let flowerinfotable = document.getElementById("flowerinfo");

flowerinfotable.innerHTML += "<tbody>";

for (let i = 0; i < flowers.length; i++) {
    let bloomsin = "";
    for (let j = 0; j < flowers[i].blooms.length; j++) {
        bloomsin += flowers[i].blooms[j];
        if(j !== (flowers[i].blooms.length - 1)) {
            bloomsin += ", ";
        }
    }
    flowerinfotable.innerHTML += `<tr>
    <td>` + flowers[i].name + `</td>
    <td>` + bloomsin + `</td></tr>`;
}

flowerinfotable.innerHTML += "</tbody>";