const Food = require("./food/Food")
const {save,load} = require("./persistance")

// save(new Food("Salad",1000),"./data/food.json")

let data = load("./data/food.json")
console.log(data)