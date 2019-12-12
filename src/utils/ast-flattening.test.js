import { findChildNodes } from './ast-flattening';
import * as esprima from 'esprima';

function parse(source) {
  return esprima.parseModule(source);
}

test('finds children in array', () => {
  const nodes = findChildNodes(parse('x; y'));
  const expected = [{
    "type": "ExpressionStatement",
    "expression": {
      "type": "Identifier",
      "name": "x"
    }
  }, {
    "type": "ExpressionStatement",
    "expression": {
      "type": "Identifier",
      "name": "y"
    }
  }];
  expect(nodes).toEqual(expected);
})

test('finds children in properties', () => {
  const nodes = findChildNodes(parse('x || y').body[0].expression);
  const expected = [{
    "type": "Identifier",
    "name": "x"
  }, {
    "type": "Identifier",
    "name": "y"
  }];
  expect(nodes).toEqual(expected);
})
