/**

Problem: Minimum Size Subarray Sum

Problem Statement: Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


Approach: 
        Sliding Window (Why? - Because it allows us to efficiently find the smallest subarray that meets the sum requirement by expanding and contracting the window as needed)
          - Steps
            1. Initialize `arrStart` and `arrEnd` to 0, `subarrayLen` to 1, `sum` to the first element of `nums`, and `ans` to null.
            2. Use a while loop to iterate as long as `arrStart` is less than the length of `nums`.
            3. If `arrEnd` is at the last index and `sum` is less than `target`, return `ans` or 0 if `ans` is still null.
            4. If `sum` is greater than or equal to `target`, check if `ans` is null or greater than `subarrayLen`. If so, update `ans` to `subarrayLen`. Then, subtract the element at `arrStart` from `sum`, increment `arrStart`, and decrement `subarrayLen`.
            5. If `sum` is less than `target`, increment `arrEnd`, add the element at the new `arrEnd` to `sum`, and increment `subarrayLen`.
            6. After the loop, return `ans` or 0 if no valid subarray was found.

Complexity Analysis:
    Time Complexity: O(n)
    Space Complexity: O(1)
**/
var minSubArrayLen = function(target, nums) {
    let arrStart = 0;
    let arrEnd = 0;
    let subarrayLen = 1;
    let sum = nums[arrEnd];
    let ans = null;
    while(arrStart < nums.length) {
        if (arrEnd === nums.length-1 && sum<target) {
            return ans || 0;
        }
        if (sum>=target) {
            if(ans===null || ans>subarrayLen) {
                ans = subarrayLen;
            }
            sum -= nums[arrStart];
            arrStart++;
            subarrayLen--;
        } else {
            arrEnd++;
            sum += nums[arrEnd];
            subarrayLen++;
        }
    }
    return ans || 0;
};