// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var dum
inp.on("line", (data) => {
  dum = data
});
inp.on("close",()=>{
   var d = dum.split(" ")
   var p = d[0]
   var t = d[1]
   var r = d[2]
   var si = (+(p) * +(t) * +(r)) / (100)
   console.log(si.toFixed(2))
});
