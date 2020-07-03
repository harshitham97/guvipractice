// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var N
inp.on("line", (data) => {
  
  N =(data)
});
inp.on("close",()=>{
   var res = []
   if(N==0)
      console.log(0)
   else{ 
   var i=1       
   while(i<=N){
        res.push(9*i)
        i++
   }
   console.log(res.join(" ")) 
   }
  
});
