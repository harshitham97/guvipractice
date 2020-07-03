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
   
    var prod = 1
    for(var i=0;i<userInput.length;i++)
    {
      if(userInput[i]==1)
         console.log(1)
      else if(userInput[i] == 0)
        console.log(0)
      else
      {
        for(var j=1;j<=userInput[i];j++){ 
          prod = prod * j
        } 
        console.log(prod)  
      }
    }
});
