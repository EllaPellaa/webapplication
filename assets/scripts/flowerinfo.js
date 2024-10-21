import {flower} from "./flowerclass";

let flowers = [];

flowers.push(new flower("cosmos", "cosmos.jpg", ["june", "july"]));

console.log(flowers[1]);

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

