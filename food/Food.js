module.exports = class Food {
    constructor(name,price) {
        this.name = name
        this.price = price
    }
    print() {
       return`--------------------      \n`+
            `${this.name} ${this.price}\n`+
            `-------------------------\n`
    }
}