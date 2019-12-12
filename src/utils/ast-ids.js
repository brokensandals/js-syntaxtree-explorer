/**
 * Annotates all the nodes in an abstract syntax tree with unique identifiers.
 * The tree is copied, not modified in place.
 * The same input tree will always produce the same output - ID generation is deterministic.
 * 
 * @param {*} ast - an object from a syntax tree produced by esprima
 * @param {*} state - for internal use only
 * @return {*} The provided ast object, or a copy of it with an astId property added.
 */
export function annotateAstWithIds(ast, state = { nextId: 1 }) {
  if (typeof ast !== 'object' || ast == null) {
    return ast;
  }

  if (Array.isArray(ast)) {
    return ast.map(obj => annotateAstWithIds(obj, state));
  }

  const annotated = {};

  if (ast.type) {
    annotated.astId = state.nextId++;
  }

  for (const key in ast) {
    annotated[key] = annotateAstWithIds(ast[key], state);
  }

  return annotated;
}