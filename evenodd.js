// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", ()=>{
    for(var i=0;i<userInput.length;i++)
    {
        if(Math.round(userInput[i])==0)
        {
            console.log("Zero")
        }
        else if((Math.round(userInput[i]))%2==0)
        {
            console.log("Even")
        }
        else
        {
            console.log("Odd")
        }
    }
});
