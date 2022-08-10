module.exports = class MaxHeap {
    constructor() {
        this.array = [];
    }

    getMax() {
        return this.array[0];
    }

    print() {
        return this.array;
    }

    insert(node) {
        this.array.push(node);

        if (this.array.length <= 1) { return ; }

        let currentIndex = this.array.length - 1;

        while (currentIndex > 0 && this.array[Math.floor(currentIndex/2)] < node) {
            const parentIndex = Math.floor(currentIndex/2);

            const nextValue = this.array[parentIndex];
            const currentValue = this.array[currentIndex];

            this.array[parentIndex] = currentValue;
            this.array[currentIndex] = nextValue;

            currentIndex = parentIndex;
        }
    }
}