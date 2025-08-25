/**

Problem Statement:
    Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. 


Approach:
    1. Create an empty array `ans` to store the result and an empty object `index` to keep track of the indices of the numbers.
    2. Iterate through the `nums` array.
    3. For each number, check if the complement (i.e., `target - nums[i]`) exists in the `index` object.
    4. If it exists, store the indices in the `ans` array and break the loop.
    5. If it doesn't exist, add the current number and its index to the `index` object.
    6. Return the `ans` array containing the indices of the two numbers that add up to `target`.

Complexity Analysis:
    Time Complexity: O(n)
    Space Complexity: O(n)
**/


var twoSum = function(nums, target) {
    const ans = [];
    const index = {};
    for (let i=0; i<nums.length; i++) {
        if (index[target-nums[i]]>=0) {
            ans[0] = index[target-nums[i]];
            ans[1] = i;
            break;
        } else {
            index[+nums[i]] = i;
        }
    }
    return ans;
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]