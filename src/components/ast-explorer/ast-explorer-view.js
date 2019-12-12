import React from 'react';
import './ast-explorer.css';

function AstExplorerView({
  ast,
  source,
  onSourceChange
}) {
  const handleSourceChange = (event) => onSourceChange(event.target.value);

  return <div className="ast-explorer">
    <textarea className="source-entry"
              value={source}
              onChange={handleSourceChange} />
    <pre className="source"><code>{source}</code></pre>
    <pre className="tree">{JSON.stringify(ast, null, 2)}</pre>
  </div>;
}

export default AstExplorerView;
