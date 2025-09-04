/**

Problem: Longest Substring Without Repeating Characters

Problem Statement: Find length of longest substring without repeating characters

Approach: 
    Sliding Window with HashMap (Why? - Because it allows us to efficiently track the characters in the current window and their indices)
    - Steps
        1. Initialize `maxWindow` to 0, `map` as an empty Map, `currStart` to 0, and `currentEnd` to 0.
        2. Iterate through the string using index `i`.
        3. If the character at index `i` is already in the map and its index is greater than or equal to `currStart`, update `currStart` to the index after the last occurrence of that character.
        4. Update the character's index in the map to the current index `i`.
        5. Increment `currentEnd`.
        6. Calculate the length of the current window (`currentEnd - currStart`) and update `maxWindow` if this length is greater than `maxWindow`.
        7. Return `maxWindow` after iterating through the string.

Comnplexity Analysis:
    Time Complecity: O(n)
    Space Complecity: O(min(m, n))
**/


var lengthOfLongestSubstring = function(s) {
    let maxWindow = 0;
    let map = new Map();
    let currStart = 0;
    let currentEnd = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) >= currStart) {
            currStart = map.get(s[i]) + 1;
            map.set(s[i], i);
        }
        else {
            map.set(s[i], i);
        }
        currentEnd++;
        if ((currentEnd - currStart) > maxWindow) {
            maxWindow = currentEnd - currStart;
        }
    }
    return maxWindow;
};

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3