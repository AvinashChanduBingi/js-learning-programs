/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let one = m-1;
    let two = n-1;
    let total = m+n-1;
    while(two>=0)
    {
        if(one>=0&&nums1[one]>nums2[two])
        {
            nums1[total--]=nums1[one--];
        }
        else
        {
            nums1[total--] = nums2[two--];
        }
    }
};
 let nums1 = [1,2,3,0,0,0];
 let m = 3;
 let nums2 = [2,5,6];
 let n = 3;
merge(nums1,m,nums2,n);
console.log(nums1);