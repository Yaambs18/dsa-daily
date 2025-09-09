/*
Problem: Subarray Sum Equals k

Problem Statement: Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Approach:
        Prefix Sum with HashMap (Why? - Because it allows us to efficiently track the cumulative sums and their frequencies, enabling quick lookups for the number of subarrays that sum to k)
            -Steps
                1. Initialize `ans` to 0, `map` with a key-value pair of 0:1 (to account for the subarray that starts from the beginning), and `currSum` to 0.
                2. Iterate through the array using a for loop, updating `currSum` by adding the current element.
                3. Check if `currSum - k` exists in the `map`. If it does, it means there are subarrays that sum to k, so increment `ans` by the value associated with `currSum - k` in the `map`.
                4. Update the `map` to include the current `currSum`. If it already exists, increment its value; otherwise, set it to 1.
                5. After iterating through the array, return `ans`.

Complexity Analysis:
    Time Complexity: O(n)
    Space Complexity: O(n)
*/



var subarraySum = function(nums, k) {
    let ans = 0;
    const map = {0:1};
    let currSum = 0;
    for (let start=1; start<= nums.length; start++) {
        currSum += nums[start-1];
        if (map[currSum-k]) {
            ans+=map[currSum-k];
        }
        if (map[currSum]) {
            map[currSum] += 1
        } else {
            map[currSum] = 1;
        }
    }
    return ans
};

// Example usage:
console.log(subarraySum([1,1,1], 2)); // Output: 2