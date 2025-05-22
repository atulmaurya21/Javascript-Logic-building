/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (mp.has(diff)) {
            return [mp.get(diff), i];
        }
        mp.set(nums[i], i);
    }

    return [];

};