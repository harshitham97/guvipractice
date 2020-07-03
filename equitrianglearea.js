
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var p
inp.on("line", (data) => {
  p= data
});
inp.on("close",()=>{
    var area = (Math.sqrt(3)/4)*p*p     
   console.log(area.toFixed(2)) 
});
