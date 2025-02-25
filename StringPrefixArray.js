/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let res = false;
 let s1 = ""
  for (let i = 0; i < words.length; i++) {
     s1 +=words[i];
     if(s1===s&&i<words.length)
         res =true   
 }
 return res;
 };
let s = "iloveleetcode";
let words = ["i","love","leetcode","apples"];
console.log(isPrefixString(s,words));