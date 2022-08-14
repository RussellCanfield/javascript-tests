const { 
    findLongestSubstring, 
    findLongestSubstringWithDistinct, 
    findLongestSubstringWithReplacements,
    stringPermutation,
    stringFindPermutations,
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

    it ('finds strings in permutations', () => {
        const output = stringPermutation('oidbcaf', 'abc');

        expect(output).toBe(true);
    });

    it ('finds strings in permutations', () => {
        const output = stringPermutation('odicf', 'dc');

        expect(output).toBe(false);
    });

    it ('finds strings in permutations', () => {
        const output = stringPermutation('bcdxabcdy', 'bcdyabcdx');

        expect(output).toBe(true);
    });

    it ('finds permutations', () => {
        const output = stringFindPermutations('ppqp', 'pq');

        expect(output).toStrictEqual(expect.arrayContaining([1, 2]));
    });

    it ('finds permutations', () => {
        const output = stringFindPermutations('abbcabc', 'abc');

        expect(output).toStrictEqual(expect.arrayContaining([2, 3, 4]));
    });
});
