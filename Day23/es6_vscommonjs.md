commonJs(requires module.export) = launch s009 -> sync, Node-only
ESmodule ES6 (import,export) =became official ECMAScript 2015; works in browser, and node >=13
    -"type"; module or .js -> .mjs 


Feature | commonJs | ESModules
|-------|----------|---------|
default export | module.export =myFn | export deafult MyFn
named export | caveat: export as object | export const sum=
import default| const MFn = require('./lib) | import MyFN from './lib'
import names | const {sum } = require('./math.js) | import {sum} from './math.js
dynamic import | require()(always sync) | await import ('./heavy.js)
file extension in Node | .js  | .mjs or .js + "type" " module in package.json