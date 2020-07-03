// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const input = []
inp.on("line", (data) => {
  input.push(data)
});
inp.on("close", ()=>{
   console.log(+(input[0]) + +(input[1])) 
});
