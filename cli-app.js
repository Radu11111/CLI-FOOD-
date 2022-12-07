
// let { menu, printMenu, printMessage } = require("./food")

// function mainLoop() {
//     printMenu(menu, (option)=> {
//     console.log("You've chosen",option)
//     if(option != "") {
//     setTimeout(mainLoop,500)
//     }
//     })
// }
// mainLoop()

//=======Autoîncărcarea modulelor==========
const food = require('./food')
console.log(food)