var fs = require('fs');

var input = fs.readFileSync(process.argv[2]);
var str = input.toString();
var splitStr = str.split('\n');

console.log(splitStr.length - 1);