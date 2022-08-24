module.exports = {
	breadthFirst(root) {
		const queue = [root];
		const treeNodes = [];

		while (queue.length > 0) {
			const levelSize = queue.length;
			const level = [];

			for (let i = 0; i < levelSize; i++) {
				let node = queue.pop();

				if (!node) {
					continue;
				}

				level.push(node.val);

				if (node.left) {
					queue.unshift(node.left);
				}

				if (node.right) {
					queue.unshift(node.right);
				}
			}

			treeNodes.push(...level);
		}

		return treeNodes;
	},

	reverseLevelOrderTraversal(root) {
		const treeNodes = [];
		const queue = [root];

		while (queue.length > 0) {
			const levelSize = queue.length;
			const level = [];

			for (let i = 0; i < levelSize; i++) {
				let node = queue.shift();

				if (!node) {
					continue;
				}

				level.push(node.val);

				if (node.left) {
					queue.push(node.left);
				}

				if (node.right) {
					queue.push(node.right);
				}
			}

			treeNodes.unshift(...level);
		}

		return treeNodes;
	},

	zigzagTraversal(root) {
		const queue = [root];

		let treeNodes = [];
		let altLevel = true;

		while (queue.length > 0) {
			let levelSize = queue.length;
			let level = [];

			for (let i = 0; i < levelSize; i++) {
				const node = queue.shift();

				if (altLevel) {
					level.push(node.val);
				} else {
					level.unshift(node.val);
				}

				if (node.left) {
					queue.push(node.left);
				}

				if (node.right) {
					queue.push(node.right);
				}
			}

			altLevel = !altLevel;

			treeNodes.push(...level);
		}

		return treeNodes;
	},

	averageLevel(root) {
		const queue = [root];

		const output = [];

		while (queue.length > 0) {
			const levelSize = queue.length;

			let levelAvg = 0;
			for (let i = 0; i < levelSize; i++) {
				const node = queue.shift();

				levelAvg += node.val;

				if (node.left) {
					queue.push(node.left);
				}

				if (node.right) {
					queue.push(node.right);
				}
			}

			output.push(levelAvg / levelSize);
		}

		return output;
	},

	minimumDepth(root) {
		const queue = [root];

		let minDepth = Number.MAX_SAFE_INTEGER;
		let level = 1;

		while (queue.length > 0) {
			let levelSize = queue.length;

			for (let i = 0; i < levelSize; i++) {
				const node = queue.shift();

				if (node.left) {
					queue.push(node.left);
				}

				if (node.right) {
					queue.push(node.right);
				}

				if (!node.left && !node.right) {
					minDepth = Math.min(minDepth, level);
				}
			}

			level++;
		}

		return minDepth;
	},
};
