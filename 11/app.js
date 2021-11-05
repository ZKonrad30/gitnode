var math = require('./math');

var fs = require('fs');

if (process.argv[2,3] == undefined) {
    console.log('Za mało parametrów!!!');
    process.exit();
} else if (process.argv[4] != undefined) {
    console.log('Za dużo parametrów!!!');
    process.exit();
}

var a = fs.readFileSync(process.argv[2]);
var b = fs.readFileSync(process.argv[3]);



const resultAdd = 'a + b = ' + math.add(a, b);
const resultSub = 'a - b = ' + math.sub(a, b);
const resultMul = 'a * b = ' + math.mul(a, b);
const resultDiv = 'a / b = ' + math.div(a, b);

console.log(resultAdd);
console.log(resultSub);
console.log(resultMul);
console.log(resultDiv);

fs.writeFileSync('wynik.txt', resultAdd + '.\n');
fs.appendFileSync('wynik.txt', resultSub + '.\n');
fs.appendFileSync('wynik.txt', resultMul + '.\n');
fs.appendFileSync('wynik.txt', resultDiv + '.\n');