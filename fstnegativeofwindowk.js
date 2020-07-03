// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const arr = []
inp.on("line", (data) => {
  arr.push(data)
});
inp.on("close",()=>{
   var dummy = arr[1].split(" ");
   //console.log(dummy)
   var j=0;
   var temp = []
   for(var i=0;i<dummy.length-3+1;i++)
   {
       var flag = false
       for(var j=0;j<3;j++)
       {
       if(dummy[i+j] < 1 )
       {
        temp[i] = dummy[i+j]
        flag= true
        break;
       }
       }
    if(!flag)
        temp[i] = 0
   }
   console.log(temp.join(" "))
});
