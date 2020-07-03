const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var max = userInput[0];
for(var i=0;i<userInput.length;i++)
{
    if(userInput[i]>max){
        max = userInput[i];
    }
}
console.log(max)
})
