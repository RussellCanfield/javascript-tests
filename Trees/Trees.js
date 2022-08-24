export function breadthFirst(root) {
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
}

export function reverseLevelOrderTraversal(root) {
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
}

export function zigzagTraversal(root) {
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
}

export function averageLevel(root) {
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
}

export function minimumDepth(root) {
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
}

export function findSuccessor(root, key) {
	const queue = [root];

	while (queue.length > 0) {
		const node = queue.shift();

		if (key === node.val) {
			break;
		}

		if (node.left) {
			queue.push(node.left);
		}

		if (node.right) {
			queue.push(node.right);
		}
	}

	if (queue.length > 0) {
		return queue.shift().val;
	}

	return null;
}

export function pathSum(root, sum) {
	const stack = [root];
	const valuesStack = [root.val];

	while (stack.length > 0) {
		const node = stack.shift();
		let targetSum = valuesStack.shift();

		if (node.left === null && node.right === null && targetSum === sum) {
			return true;
		}

		if (node.left) {
			stack.push(node.left);
			valuesStack.push(targetSum + node.left.val);
		}

		if (node.right) {
			stack.push(node.right);
			valuesStack.push(targetSum + node.right.val);
		}
	}

	return false;
}

export function pathSum_Recursive(root, sum) {
	if (root == null) {
		return false;
	}

	if (root.left === null && root.right === null && sum === root.val) {
		return true;
	}

	return (
		pathSum_Recursive(root.left, sum - root.val) ||
		pathSum_Recursive(root.right, sum - root.val)
	);
}
