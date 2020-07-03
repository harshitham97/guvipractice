// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[]
inp.on("line", (data) => {
  userInput.push(data)
});
inp.on("close",()=>{
    var dummy = userInput[1].split(" ")
    function getUnique(array){
        var uniqueArray = [];
    
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    var temp = getUnique(dummy)
    console.log(temp.join(" "));
});
