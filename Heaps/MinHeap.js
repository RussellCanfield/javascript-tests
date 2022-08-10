module.exports = class MinHeap {
    constructor() {
        this.array = [];
    }

    getMin() {
        return this.array[0];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeft(index) {
        return index * 2 + 1;
    }

    getRight(index) {
        return index * 2 + 2;
    }

    valueAt(index) {
        return this.array[index];
    }

    print() {
        return this.array;
    }

    insert(node) {
        this.array.push(node);

        if (this.array.length <= 1) return;

        let currentIndex = this.array.length - 1;

        while (currentIndex > 0 && this.array[this.getParent(currentIndex)] > this.array[currentIndex]) {
            const parentIndex = this.getParent(currentIndex);

            [this.array[parentIndex], this.array[currentIndex]] = 
                [this.array[currentIndex], this.array[parentIndex]];

            currentIndex = parentIndex;
        }
    }

    pop() {
        if (this.array.length == 0) return;

        let index = 0;

        [this.array[index], this.array[this.array.length - 1]] = 
            [this.array[this.array.length - 1], this.array[index]];

        const returnValue = this.array.pop();

        let currentIndex = index;
        let leftIndex = this.getLeft(currentIndex);
        let rightIndex = this.getRight(currentIndex);

        while (currentIndex < this.array.length &&
            (this.array[leftIndex] &&
            this.array[currentIndex] > this.array[leftIndex]) ||
            (this.array[rightIndex] &&
            this.array[currentIndex] > this.array[rightIndex])) {

            if (this.array[leftIndex] > this.array[rightIndex]) {
                [this.array[leftIndex], this.array[rightIndex]] = 
                    [this.array[rightIndex], this.array[leftIndex]];
            }
    
            if (this.array[currentIndex] > this.array[leftIndex]) {
                [this.array[currentIndex], this.array[leftIndex]] =
                    [this.array[leftIndex], this.array[currentIndex]];
                    currentIndex = leftIndex;
            } else if (this.array[currentIndex] > this.array[rightIndex]) {
                [this.array[currentIndex], this.array[rightIndex]] =
                    [this.array[rightIndex], this.array[currentIndex]];
                    currentIndex = rightIndex;
            };

            leftIndex = this.getLeft(currentIndex);
            rightIndex = this.getRight(currentIndex);
        }

        return returnValue;
    }
}