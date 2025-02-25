let word = 'byabx';
const map = new Map();
for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(i+97),i+1);
}
let cur = 'a';
let sum = 0;
for (let i = 0; i < word.length; i++) {
  let a = map.get(cur);   
  let b = map.get(word.charAt(i));   
  let diff = Math.abs(a-b);
  console.log(diff)
  if(diff>13)
    sum+=26-diff+1;
  else
    sum+=diff+1; 
cur = word.charAt(i);
}
console.log("sum "+sum);