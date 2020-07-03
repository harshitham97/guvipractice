// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var Strin = ""
inp.on("line", (data) => {
  Strin = data
});
inp.on("close",()=>{
    var d = Strin.split(" ")
    var total = 0
    for(var i=0;i<d.length;i++)
       total = total + (d[i].length)
    console.log(total)
})
