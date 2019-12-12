import { annotateAstWithIds } from './ast-ids';
import * as esprima from 'esprima';

const TEST_SOURCE = `
function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}
`;

const TEST_AST = esprima.parseModule(TEST_SOURCE);

test('adds IDs to a syntax tree', () => {
  const annotated = annotateAstWithIds(TEST_AST);
  const expected = {
    "astId": 1,
    "type": "Program",
    "body": [
      {
        "astId": 2,
        "type": "FunctionDeclaration",
        "id": {
          "astId": 3,
          "type": "Identifier",
          "name": "fib"
        },
        "params": [
          {
            "astId": 4,
            "type": "Identifier",
            "name": "n"
          }
        ],
        "body": {
          "astId": 5,
          "type": "BlockStatement",
          "body": [
            {
              "astId": 6,
              "type": "IfStatement",
              "test": {
                "astId": 7,
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "astId": 8,
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "astId": 9,
                    "type": "Identifier",
                    "name": "n"
                  },
                  "right": {
                    "astId": 10,
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "right": {
                  "astId": 11,
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "astId": 12,
                    "type": "Identifier",
                    "name": "n"
                  },
                  "right": {
                    "astId": 13,
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              },
              "consequent": {
                "astId": 14,
                "type": "BlockStatement",
                "body": [
                  {
                    "astId": 15,
                    "type": "ReturnStatement",
                    "argument": {
                      "astId": 16,
                      "type": "Identifier",
                      "name": "n"
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "astId": 17,
              "type": "ReturnStatement",
              "argument": {
                "astId": 18,
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "astId": 19,
                  "type": "CallExpression",
                  "callee": {
                    "astId": 20,
                    "type": "Identifier",
                    "name": "fib"
                  },
                  "arguments": [
                    {
                      "astId": 21,
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "astId": 22,
                        "type": "Identifier",
                        "name": "n"
                      },
                      "right": {
                        "astId": 23,
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ]
                },
                "right": {
                  "astId": 24,
                  "type": "CallExpression",
                  "callee": {
                    "astId": 25,
                    "type": "Identifier",
                    "name": "fib"
                  },
                  "arguments": [
                    {
                      "astId": 26,
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "astId": 27,
                        "type": "Identifier",
                        "name": "n"
                      },
                      "right": {
                        "astId": 28,
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    ],
    "sourceType": "module"
  }
  
  expect(annotated).toEqual(expected);
});
