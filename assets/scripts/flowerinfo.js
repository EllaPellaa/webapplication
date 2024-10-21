import {flower} from "./flowerclass.js";

let flowers = [];

flowers.push(new flower("cosmos", "cosmos.jpg", ["june", "july"]));
flowers.push(new flower("dandelion", "dandelion.jpg", ["may", "june", "july"]));
flowers.push(new flower("forget-me-not", "forget-me-not.jpg", ["april", "may"]));

console.log(flowers[0]);

let flowerinfo = 
{
    "flowers": [
        {
            "name": "cosmos",
            "photo": "cosmos.jpg",
            "blooms": ["june", "july"]
        },
        {
            "name": "dandelion",
            "photo": "dandelion.jpg",
            "blooms": ["may", "june", "july"]
        }, 
        {
            "name": "forget-me-not",
            "photo": "forgetmenot.jpg",
            "blooms": ["april", "may"]
        },
        {
            "name": "hydrangea",
            "photo": "hydrangea.jpg",
            "blooms": ["may", "june", "july"]
        },
        {
            "name": "lily of the valley",
            "photo": "lilyofthevalley.jpg",
            "blooms": ["may"]
        },
        {
            "name": "rose",
            "photo": "rose.jpg",
            "blooms": ["may", "june", "july", "august", "september", "october"]
        }
    ]
};

