/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

      let val = 0;
    const n = nums.length;
    for (let i = 1; i <= n; i++) {
        val ^= i;
    }
    for (let num of nums) {
        val ^= num;
    }

    return val; 
    
};