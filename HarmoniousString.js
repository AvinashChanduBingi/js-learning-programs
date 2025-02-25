

let nums = [1,3,2,2,5,2,3,7];
nums.sort((a,b)=>{return a-b})
const map = new Map();
for (let i = 0; i < nums.length; i++) {
  map.set(nums[i],map.get(nums[i])+1||1) ;
}
console.log(map);
let arr = Array.from((map));
console.log(arr);
let max = 0;
for (let i = 0; i < arr.length-1; i++) {
   if(arr[i][1]+arr[i+1][1]>max&&arr[i][0]+1==arr[i+q][0])
   {
    max = arr[i][1]+arr[i+1][1];
   }
}
console.log(max);
