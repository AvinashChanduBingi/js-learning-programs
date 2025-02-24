const arr = [2,3,6,1,2,5,7,8,9,4,7,8];
const windowLength = 3;
let windowSum = 0;
for(let i =0;i<windowLength;i++)
{
   windowSum+=arr[i];
}
let max = windowSum;
let min = windowSum;
for(let i = windowLength;i<arr.length;i++)
{
    if(max<windowSum)
    {
        max  = windowSum;
    }
    if(min>windowSum)
    {
        min = windowSum;
    }
    windowSum = windowSum+arr[i]-arr[i-windowLength];
    
   
}
console.log("max "+max);
console.log("min "+min);