import React from 'react';
import './app.css';
import AstExplorer from '../ast-explorer';

const TEST_SOURCE = `function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}`;

function AppView() {
  return (
    <div className="app">
      <AstExplorer defaultSource={TEST_SOURCE} />
      <div className="blurb">
        created by <a href="https://brokensandals.net">brokensandals</a> | source code on <a href="https://github.com/brokensandals/js-syntaxtree-explorer">github</a> | built using <a href="https://esprima.org">esprima</a>
      </div>
    </div>
  );
}

export default AppView;
