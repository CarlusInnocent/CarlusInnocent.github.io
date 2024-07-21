// commojs, every file is module (by default)
// modules - encapsulted code (only share minimum)

const names = require("./names")
const sayHi = require("./ut")
const data = require("./6-altanative flavour")

sayHi('Suzan')
sayHi(names.john)
sayHi(names.peter)