
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []
inp.on("line", (data) => {
  userInput.push(data)
});
inp.on("close",()=>{
   for(var i=0;i<userInput.length;i++)
   {
       var f = ((userInput[i]*(9/5))+32)
       console.log(f.toFixed(2))
   }
});
