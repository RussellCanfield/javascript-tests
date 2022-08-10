const MinHeap = require('../MinHeap.js');
const MaxHeap = require('../MaxHeap.js');

describe('Heap Tests', () => {
    it('minHeap - gets min value', () => {
        const minHeap = new MinHeap();
        
        minHeap.insert(3);
        minHeap.insert(2);
        minHeap.insert(1);
        minHeap.insert(5);
        minHeap.insert(7);

        const heap = minHeap.print();

        expect(minHeap.getMin()).toBe(1);
    })

    it('minHeap - gets left and right values from parent', () => {
        const minHeap = new MinHeap();
        
        minHeap.insert(3);
        minHeap.insert(2);
        minHeap.insert(5);
        minHeap.insert(7);
        minHeap.insert(4);
        minHeap.insert(6);
        minHeap.insert(1);

        const rootLeft = minHeap.getLeft(0);
        const rootRight = minHeap.getRight(0);

        expect(minHeap.valueAt(rootLeft)).toBe(3);
        expect(minHeap.valueAt(rootRight)).toBe(2);
    })

    it('minHeap - pops smallest element', () => {
        const minHeap = new MinHeap();
        
        minHeap.insert(3);
        minHeap.insert(2);
        minHeap.insert(1);
        minHeap.insert(5);
        minHeap.insert(7);
        minHeap.insert(4);
        minHeap.insert(6);

        expect(minHeap.pop()).toBe(1);
        expect(minHeap.pop()).toBe(2);
        expect(minHeap.pop()).toBe(3);
        expect(minHeap.pop()).toBe(4);
        expect(minHeap.pop()).toBe(5);
        expect(minHeap.pop()).toBe(6);
        expect(minHeap.pop()).toBe(7);
    })

    it('maxHeap - gets max value', () => {
        const maxHeap = new MaxHeap();

        maxHeap.insert(1);
        maxHeap.insert(2);
        maxHeap.insert(3);

        const heap = maxHeap.print();

        expect(heap[0]).toBe(3);
        expect(heap[1]).toBe(2);
        expect(heap[2]).toBe(1);
        expect(maxHeap.getMax()).toBe(3);
    })
})