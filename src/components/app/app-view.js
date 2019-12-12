import React from 'react';
import './app.css';
import AstExplorer from '../ast-explorer';

const TEST_SOURCE = `
function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}
`;

function AppView() {
  return (
    <div className="app">
      <AstExplorer defaultSource={TEST_SOURCE} />
    </div>
  );
}

export default AppView;
