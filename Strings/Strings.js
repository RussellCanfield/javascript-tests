module.exports = {
    findLongestSubstring(input, k) {
        if (!input) return 0;

        if (input.length === 1) return 1;

        let left = 0;
        let right = 1;

        let charsProcessed = new Map();
        charsProcessed.set(input[0], 1);

        let maxCount = 0;

        while (right < input.length) {
            let rightChar = input[right];

            if (charsProcessed.has(rightChar)) {
                let count = charsProcessed.get(rightChar);
                count++;
                charsProcessed.set(rightChar, count);
            } else {
                charsProcessed.set(rightChar, 1);
            }

            if (charsProcessed.size > k) {
                let count = 0;
                charsProcessed.forEach((v, k) => {
                    if (k !== rightChar) {
                        count += v;
                    }
                });

                if (count > maxCount) {
                    maxCount = count;
                }

                charsProcessed.delete(input[left]);
                left++;
            }

            right++;
        }

        return maxCount === 0 ? input.length : maxCount;
    },

    findLongestSubstringWithDistinct(str) {
        let start = 0, end = 1;

        let currentOutput = new Set();
        currentOutput.add(str[start]);

        let longest = 1;

        while (end < str.length) {
            if (!currentOutput.has(str[end])) {
                currentOutput.add(str[end]);
            } else {
                if (currentOutput.size > longest) {
                    longest = currentOutput.size;
                }

                currentOutput.clear();
                currentOutput.add(str[end]);

                start++;
            }

            end++;
        }

        return longest;
    },

    findLongestSubstringWithReplacements(str, k) {
        let start = 0, end = 1;

        let processedChars = new Map();
        processedChars.set(str[start], 1);

        let largestArray = 0, longestMatch = 0;

        while (end < str.length) {
            if (processedChars.has(str[end])) {
                let count = processedChars.get(str[end]);
                count++;
                processedChars.set(str[end], count);
            } else {
                processedChars.set(str[end], 1);
            }

            longestMatch = Math.max(processedChars.get(str[end]), longestMatch);

            if ((end - start + 1 - longestMatch) > k) {
                const startIndex = processedChars.get(str[start]);

                processedChars.delete(str[start]);
                start += startIndex;

                longestMatch = 0;
            }

            largestArray = Math.max(end - start + 1, largestArray);

            end++;
        }

        return largestArray;
    },

    stringPermutation(str, pattern) {
        let start = 0, end = 0;

        let test = new Set(pattern);

        let charMatch = 0;

        while (end < str.length) {
            if (!test.has(str[end])) {
                start++;
                charMatch = 0;
            } else {
                charMatch++;

                if (charMatch === test.size) {
                    return true;
                }
            }

            end++;
        }

        return false;
    },

    stringFindPermutations(str, permutation) {
        let start = 0, end = 1;

        let input = new Set(permutation);

        let output = [];

        let subArray = new Set();

        subArray.add(str[start]);

        while (end < str.length) {
            if (input.has(str[end])) {
                subArray.add(str[end]);
            }

            if (end - start + 1 === input.size) {
                if (subArray.size === input.size) {
                    output.push(start);
                } else {
                    output.shift();
                }

                if (str[start] !== str[start + 1]) {
                    subArray.delete(str[start]);
                }
                
                start++;
            }

            end++;
        }

        return output;
    }
}