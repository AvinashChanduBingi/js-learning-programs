/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const map = new Map();
    map.set('{','}');
    map.set('[',']');
    map.set('(',')');
    const arr = [];
    let valid = true;
    for(let i =0 ;i<s.length;i++)
    {
        if(map.get(s.charAt(i)))
        {
            arr.push(map.get(s.charAt(i)));
        }
        else
        {
            if(s.charAt(i)!=arr.pop())
            {
                valid = false
                break;
            }
        }
    }
    if(arr.length>0) return false;
    return valid;
    
};
console.log(isValid('()[]{}'));