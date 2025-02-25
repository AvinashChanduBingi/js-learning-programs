let s = 'oneThingAboutMeIsThatIHave';
let s1 = '';

for(let i =0;i<s.length;i++)
{
    if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122)
    {
       s1 += String.fromCharCode(s.charCodeAt(i)-32);  
    }
    else
    {
        console.log(s1);
        s1 = "";
        s1 += String.fromCharCode(s.charCodeAt(i)+32);  
    }
   
}
console.log(s1);