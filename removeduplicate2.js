/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length; // ai helped
    let slow = 2; 
    for (let fast = 2; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 2]) { 
            nums[slow] = nums[fast]; 
            slow++; 
        }
    }
    return slow; 
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));