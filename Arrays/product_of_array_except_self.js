/*
Problem: Product of Array Except Self

Problem Statement: 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

You must write an algorithm that runs in O(n) time and without using the division operation.

Approach:
        Prefix and Suffix Products (Why? - This approach allows us to compute the product of all elements except the current one without using division, by maintaining products of elements before and after each index)
            -Steps
                1. Initialize an array `ans` with the same length as `nums`, filled with 1s.
                2. Compute the prefix products:
                    - Iterate through `nums` from the second element to the end, updating `ans[i]` to be the product of all previous elements.
                3. Compute the suffix products:
                    - Iterate through `nums` from the second-to-last element to the beginning, multiplying `ans[j]` by the product of all subsequent elements.
                4. Return the `ans` array.
*/


var productExceptSelf = function(nums) {
    let numsProduct = 1;
    const ans = Array(nums.length).fill(1);
    numsProduct = nums[0];
    for (let i=1; i<nums.length; i++) {
        ans[i] = numsProduct
        numsProduct*=nums[i];
    }
    numsProduct = 1
    for (let j=nums.length-1; j>=0; j--) {
        ans[j] *= numsProduct;
        numsProduct*=nums[j];
    }
    return ans;
};

// Example usage:
console.log(productExceptSelf([1,2,3,4])); // output: [24, 12, 8, 6]