module.exports = {
  averageSubArrays(array, k) {
    if (k?.length === 0) return [];

    const output = [];

    for (let left = 0; left < array.length; left++) {
      let sum = 0;

      for (let right = left; right < left + k; right++) {
        if (right >= array.length) break;

        sum += array[right];
      }

      output.push(sum / k);
    }

    return output;
  },

  averageSubArrays_opt(array, k) {
    if (k?.length === 0) return [];

    const output = [];

    let start = 0;
    let pointer = 0;
    let sum = 0;

    while (pointer < array.length) {
      if (pointer >= k) {
        output.push(sum / k);

        sum -= array[start];

        start++;
      }

      sum += array[pointer];

      pointer++;
    }

    return output;
  },

  findLargestSubArray(array, k) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let largest = 0;

    while (end < array.length) {
      if (end >= k) {
        if (sum > largest) {
          largest = sum;
        }

        sum -= array[start];

        start++;
      }

      sum += array[end];

      end++;
    }

    return largest;
  },

  findSmallest(array, k) {
    if (array.length === 0) return 0;

    let smallestArray = 0;

    let left = 0;
    let right = 1;
    let sum = array[0];

    while (right < array.length) {
      sum += array[right];

      if (sum > k) {
        smallestArray = right - left;
        left++;
      }

      if (array[right] > k) {
        smallestArray = 1;
      }

      right++;
    }

    return smallestArray;
  },

  fruitInBasket(arr) {
    let start = 0, end = 1;
    let output = 1;

    while (end <= arr.length - 1) {
      if (start !== end -1 && arr[start] !== arr[end]) {
        start++;

        if (arr[start] !== arr[end]) {
          output--;
        }
      }

      output++;

      end++;
    }

    return output;
  },

  findLongestSubWithOnesAfterReplacement(arr, k) {
    let start = 0, end = 1;
    
    let largestArray = 0;
    let numOfOnes = arr[start] === 1 ? 1 : 0;

    while (end < arr.length) {
        if (arr[end] === 1) {
            numOfOnes++;
        }

        if (end - start + 1 - numOfOnes > k || end === arr.length - 1) {
            largestArray = Math.max(largestArray, end - start + 1);

            if (arr[start] === 1) {
                numOfOnes--;
            }
            
            start++;
        }

        end++;
    }

    return largestArray;
}
};
