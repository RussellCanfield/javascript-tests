const { 
    averageSubArrays, 
    averageSubArrays_opt, 
    findLargestSubArray, 
    findSmallest, 
    fruitInBasket, 
    findLongestSubWithOnesAfterReplacement,
    findPairWithSum,
    removeDuplicates,
    squareNumbers,
    tripletSums
} = require('../Arrays');

describe('Array Tests', () => {
    it('gets average of k subarrays', () => {
        const output = averageSubArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

        expect(output).toEqual(expect.arrayContaining([2.2, 2.8, 2.4, 3.6, 2.8]));
    });

    it('gets average of k subarrays - optimized', () => {
        const output = averageSubArrays_opt([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

        expect(output).toEqual(expect.arrayContaining([2.2, 2.8, 2.4, 3.6, 2.8]));
    });

    it('find largest sub array', () => {
        const output = findLargestSubArray([2, 1, 5, 1, 3, 2], 3);

        expect(output).toEqual(9);
    });

    it('find smallest sub array', () => {
        const output = findSmallest([2,1,5,2,3,2], 7);

        expect(output).toEqual(2);
    });

    it('puts the fruit in the basket', () => {
        const output = fruitInBasket(['A', 'B', 'C', 'A', 'C']);

        expect(output).toEqual(3);
    });

    it('puts other fruit in the basket', () => {
        const output = fruitInBasket(['A', 'B', 'C', 'B', 'B', 'C']);

        expect(output).toEqual(5);
    });
    
    it('longest array with ones', () => {
        const output = findLongestSubWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);

        expect(output).toBe(6);
    });

    it('longest array with ones', () => {
        const output = findLongestSubWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3);

        expect(output).toBe(9);
    });

    it('find pair that adds to sum in array', () => {
        const output = findPairWithSum([1, 2, 3, 4, 6], 6);

        expect(output).toStrictEqual(expect.arrayContaining([1, 3]));
    });

    it('find pair that adds to sum in array', () => {
        const output = findPairWithSum([2, 5, 9, 11], 11);

        expect(output).toStrictEqual(expect.arrayContaining([0, 2]));
    });

    it('remove duplicates', () => {
        const output = removeDuplicates([2, 3, 3, 3, 6, 9, 9]);

        expect(output.length).toBe(4);
    });

    it('squares numbers', () => {
        const output = squareNumbers([-2, -1, 0, 2, 3]);

        expect(output).toStrictEqual([0, 1, 4, 4, 9]);
    });

    /*it('triplet sums to 0', () => {
        const output = squareNumbers([-3, 0, 1, 2, -1, 1, -2]);

        expect(output).toStrictEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
    });*/
});