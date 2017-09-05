//console.log(process.argv);

var numbers = [];
for (var i = 2; i < process.argv.length; i ++){
    numbers.push(Number(process.argv[i]));
}

console.log(numbers.reduce((a,b)=> a+b));
