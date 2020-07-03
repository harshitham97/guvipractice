// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []
inp.on("line", (data) => {
  userInput.push(data)
});
inp.on("close", ()=>{
  for(var i=0;i<userInput.length;i++)
  {
      if(userInput[i] == 0 || userInput[i]>12)
        console.log("Error")
      else if(userInput[i]==2)
        console.log(28)
      else if(userInput[i]%2 == 0)
        console.log(31)
      else
        console.log(30)
  }
});
