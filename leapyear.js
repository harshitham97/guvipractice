// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var year
inp.on("line", (data) => {
  year = data
});
inp.on("close", ()=>{
   if(year % 4 ==0 || (year%400 == 0 && year%100 ==0))
    console.log('Y')
   else
    console.log('N')
});
