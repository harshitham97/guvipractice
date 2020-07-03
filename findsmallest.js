// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var p
inp.on("line", (data) => {
  p = (data)
});
inp.on("close",()=>{
   var d = p.split(" ")
   if(+(d[0])< +(d[1]))
        console.log(+(d[0]))
   else
        console.log(+(d[1]))
});
