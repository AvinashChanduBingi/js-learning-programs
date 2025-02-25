const arr = [-2,-2,-3,1];
const l = 2;
const r = 3;
let min = Infinity;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let leftpointer = l;
    while(leftpointer<=r&&i+leftpointer<=arr.length)
    {
        console.log(arr.slice(i,i+leftpointer));
        sum =  arr.slice(i,i+leftpointer).reduce((acc,num)=>acc+num);
       leftpointer++;
       if(sum<min&&sum>0)
       {
        min = sum;
       }
    }
    
}
if (min == Infinity) console.log(-1) 
else console.log(min);
