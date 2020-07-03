// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var num
inp.on("line", (data) => {
  num = data
});
inp.on("close", ()=>{
   console.log(Math.pow(num,2)) 
});
