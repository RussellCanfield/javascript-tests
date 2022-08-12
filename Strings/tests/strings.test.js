const { 
    findLongestSubstring, 
    findLongestSubstringWithDistinct, 
    findLongestSubstringWithReplacements,
    findLongestSubWithOnesAfterReplacement
} = require('../Strings');

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

    it ('longest substring with distinct characters', () => {
        const output = findLongestSubstringWithDistinct('aabccbb');

        expect(output).toBe(3);
    });

    it ('longest substring with replacements', () => {
        const output = findLongestSubstringWithReplacements('aabccbb', 2);

        expect(output).toBe(5);
    });

    it ('longest substring with replacements', () => {
        const output = findLongestSubstringWithReplacements('abbcb', 1);

        expect(output).toBe(4);
    });

    it ('longest substring with replacements', () => {
        const output = findLongestSubstringWithReplacements('abccde', 1);

        expect(output).toBe(3);
    });
    
    it('longest array with ones', () => {
        const output = findLongestSubWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);

        expect(output).toBe(6);
    });

    it('longest array with ones', () => {
        const output = findLongestSubWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3);

        expect(output).toBe(9);
    });
});
