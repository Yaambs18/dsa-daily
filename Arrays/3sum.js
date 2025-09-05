/**
 
Problem: 3Sum
 
Problem Statement: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
  
Approach: Sorting and Two Pointers (Why? - Sorting helps to easily skip duplicates and two pointers help to find pairs that sum to a specific value efficiently)

- Steps
    1. Sort the input array `nums`.
    Note:- After sorting, picking 1 element, it converts to 2 sum problem.
    2. Initialize an empty array `ans` to store the result triplets.
    3. Loop through the array with index `i` from 0 to `nums.length - 2`.
    4. If the current element is the same as the previous one (to avoid duplicates), continue to the next iteration.
    5. Set two pointers: `left` to `i + 1` and `right` to the last index of the array.
    6. While `left` is less than `right`, calculate the sum of the three elements: `nums[i] + nums[left] + nums[right]`.
        - If the sum is greater than 0, decrement the `right` pointer.
        - If the sum is less than 0, increment the `left` pointer.
        - If the sum is equal to 0, add the triplet to `ans`, then move both pointers inward while skipping over duplicate values.
    7. Return the `ans` array containing all unique triplets.

Complexity Analysis:
    Time Complexity: O(n^2)
    Space Complexity: O(1)
**/





var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const ans = [];
    for(let i=0; i<nums.length-2; i++) {
        if (i>0 && nums[i-1]===nums[i]) continue;
        let left = i+1;
        let right = nums.length-1;
        while (left<right) {
            let sum = nums[i] + nums[left]+nums[right];
            if (sum>0) {
                right--;
            } else if (sum<0) {
                left++;
            } else {
                ans.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left+1]) left++;
                while (right > left && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            }
        }
    }
    return ans;
};