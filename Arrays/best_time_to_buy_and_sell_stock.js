/**

Probmlem Statement: 
    Given prices array where ech index represents day's stock price, 
    find the maximum profit by buying and selling the stock once


Approach:
    1. Initialize `buyPrice` and `sellPrice` to the first price in the array.
    2. Iterate through the prices starting from the second element.
    3. If the current price is less than `buyPrice`, check if selling at `sellPrice` gives a better profit than previously recorded, then update `maxPrice`.
    4. Update `buyPrice` and `sellPrice` to the current price.
    5. If the current price is greater than `sellPrice`, update `sellPrice`.
    6. After iterating through all prices, calculate the final profit and return the maximum profit found.

Complexity Analysis:
    Time Complexity: O(n)
    Space Complexity: O(1)
**/


var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let sellPrice = prices[0];
    let maxPrice = 0;
    for(let i=1; i<prices.length; i++) {
        if (buyprice > prices[i]) {
            if ((sellPrice-buyPrice) > maxPrice) {
                maxPrice = sellPrice-buyPrice;
            }
            buyPrice=prices[i];
            sellPrice=prices[i];
        } else if (sellPrice < prices[i]) {
            sellPrice = prices[i];
        }
    }
    const ans = sellPrice-buyPrice;
    return ans > maxPrice ? ans : maxPrice; 
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5