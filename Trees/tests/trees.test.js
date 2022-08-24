const { TreeNode } = require("../TreeNode");

const {
	breadthFirst,
	reverseLevelOrderTraversal,
	zigzagTraversal,
	averageLevel,
	minimumDepth,
	findSuccessor,
	pathSum,
	pathSum_Recursive,
} = require("../Trees");

describe("Binary Trees", () => {
	it("does level order traversal", () => {
		var root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = breadthFirst(root);

		expect(output).toStrictEqual([12, 7, 1, 9, 10, 5]);
	});

	it("does reverse level order traversal", () => {
		var root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = reverseLevelOrderTraversal(root);

		expect(output).toStrictEqual([9, 10, 5, 7, 1, 12]);
	});

	it("does zigzag traversal", () => {
		var root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);
		root.right.left.left = new TreeNode(20);
		root.right.left.right = new TreeNode(17);

		const output = zigzagTraversal(root);

		expect(output).toStrictEqual([12, 1, 7, 9, 10, 5, 17, 20]);
	});

	it("does average level", () => {
		var root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.left.right = new TreeNode(2);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = averageLevel(root);

		expect(output).toStrictEqual([12, 4, 6.5]);
	});

	it("does minimum depth", () => {
		var root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);
		root.left.left = new TreeNode(9);
		root.right.left.left = new TreeNode(11);

		const output = minimumDepth(root);

		expect(output).toStrictEqual(3);
	});

	it("does find a successor", () => {
		const root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = findSuccessor(root, 9);

		expect(output).toStrictEqual(10);
	});

	it("does find sum using DFS", () => {
		const root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = pathSum(root, 23);

		expect(output).toStrictEqual(true);
	});

	it("does find sum using DFS", () => {
		const root = new TreeNode(12);
		root.left = new TreeNode(7);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(9);
		root.right.left = new TreeNode(10);
		root.right.right = new TreeNode(5);

		const output = pathSum_Recursive(root, 23);

		expect(output).toStrictEqual(true);
	});
});
