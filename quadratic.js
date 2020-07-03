// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var p 
inp.on("line", (data) => {
 p = data
});
inp.on("close",()=>{
   var d = p.split(" ") 
   var a = d[0]
   var b = d[1]
   var c = d[2]
   var root1 = (- +(b) + Math.sqrt(+(b) * +(b)-(4*a*c)))/(2*a)
   var root2 = (- +(b) - (Math.sqrt(+(b) * +(b)-(4*a*c))))/(2*a)
   console.log(root1.toFixed(2))
   console.log(root2.toFixed(2))
});
