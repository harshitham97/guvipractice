// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []
inp.on("line", (data) => {
  userInput.push(data)
});
inp.on("close", () =>{
  
  for(var i=0;i<userInput.length;i++){
      console.log(userInput[i] * 1000)
      console.log(userInput[i] * 100000)
  }
    
});
