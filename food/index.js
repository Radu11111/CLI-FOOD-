// module.exports.menu = require("./menu").menu
// let helpers = require("./helpers")

// module.exports.prinMenu = helpers.printMenu
// module.exports.prinMessage = helpers.printMessage 

//H.W.=======Autoîncărcarea modulelor==========
//Varianta 1
const fs = require('fs')

const dir = fs.readdirSync('./food')

// dir.forEach((fileName)=>{
//     if(fileName != 'index.js') {
//         module.exports[fileName] = require('./'+fileName)
//     }
// })

// Varianta 2
let dirFilter = dir.filter((fileName) => fileName != 'index.js')

let dirWithoutExt = dirFilter.map((fileName) => {
    fileNameWithoutExt = fileName.substring(0, fileName.indexOf('.js'))
    module.exports[fileNameWithoutExt] = require('./' + fileNameWithoutExt)
})








