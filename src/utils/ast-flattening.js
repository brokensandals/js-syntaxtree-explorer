/**
 * Helper function for finding children of a node in the AST.
 * Given a node, this simply returns the node, wrapped in an array.
 * Given anything else, it recursively looks for nodes, and returns
 * an array of all the nodes that can be reached without traveling through
 * an intermediate node.
 * @param {*} object a node, array of nodes, or a property value of a node
 * @return {Object[]} the node or the children that are nodes
 */
function findNodes(object) {
  if (object == null || typeof object !== 'object') {
    return [];
  }

  if (Array.isArray(object)) {
    return object.flatMap(findNodes);
  }

  if (object.type) {
    return [object];
  }

  return Object.keys(object).flatMap(k => findNodes(object[k]));
}

/**
 * Finds the children of a given abstract syntax tree node.
 * @param {Object} node a node from the esprima-generated syntax tree
 * @return {Object[]} the child nodes in the syntax tree
 */
export function findChildNodes(node) {
  return Object.keys(node).flatMap(k => findNodes(node[k]));
}
