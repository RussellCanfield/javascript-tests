const { findLongestSubstring } = require('../Strings');

describe('Strings', () => {
    it ('longest substring with no more than 2 distinct characters', () => {
        const output = findLongestSubstring('araaci', 2);

        expect(output).toBe(4);
    });

    it ('longest substring with no more than 1 distinct characters', () => {
        const output = findLongestSubstring('araaci', 1);

        expect(output).toBe(2);
    });

    it ('longest substring with no more than 3 distinct characters', () => {
        const output = findLongestSubstring('cbbebi', 3);

        expect(output).toBe(5);
    });

    it ('longest substring with no more than 10 distinct characters', () => {
        const output = findLongestSubstring('cbbebi', 10);

        expect(output).toBe(6);
    });
});
