


let s = "iiii";
let k = 1;
let res = 0;
let s1 = '';
for (let i = 0; i < s.length; i++) {
    s1+=s.charCodeAt(i)-96; 
 }
for (let i = 0; i < k; i++) {
    console.log(s1);
    let a = Array.from(s1);
    res = a.reduce((acc,n)=>acc+parseInt(n),0);
    s1 = ''+res;
}
console.log(res);
