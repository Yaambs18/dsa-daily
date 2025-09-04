/**

Problem: Maximum Subarray - Subarray with the largest sum

Approach: 
    Prefix Sum (Kadane's Algorithm) (Why? - Because it efficiently finds the maximum sum of a contiguous subarray in linear time)
    - Steps
        1. Initialize `max` and `currSum` to the first element of the array.
        2. Iterate through the array starting from the second element.
        3. For each element, check if adding it to `currSum` is less than the element itself and if `currSum` is negative. If so, reset `currSum` to the current element. Otherwise, add the current element to `currSum`.
        4. Update `max` if `currSum` is greater than `max`.

Complexity Analysis:
    Time Complexity: O(n)
    Space Complexity: O(1)


**/

var maxSubArray = function(nums) {
    let max = nums[0];
    let currSum = nums[0];
    for(let i=1; i<nums.length; i++) {
        if (nums[i] > currSum && currSum < 0) {
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }
        if (currSum > max) {
            max = currSum;
        }
    }
    return max;
};

// Example usage:
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums)); // Output: 6