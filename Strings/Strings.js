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
    }
}