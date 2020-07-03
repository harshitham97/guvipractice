// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const input = []
inp.on("line", (data) => {
 input.push(data)
});
inp.on("close",()=>{
    for(var i=0;i<input.length;i++)
    {
        var rad = input[i]*2*(22/7)
        console.log(rad.toFixed(2))
    }
});
