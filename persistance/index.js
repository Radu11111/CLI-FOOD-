const fs = require("fs")
const map = require('./map')


//SAVE TO FILE
module.exports.save = (object,path) => {
    object.type = object.constructor.name
    //Object with class
    fs.writeFileSync(path, //??
        JSON.stringify(object))
}
//LOAD FROM FILE
module.exports.load = (path) => {
   
    let data =JSON.parse(
        fs.readFileSync(
        path 
    ).toString()
    )
    const Clazz = require(map[data['type']])
    // pass all the properties
    let obj = new Clazz(data.name)
    return obj
}

