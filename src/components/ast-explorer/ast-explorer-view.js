import React from 'react';
import './ast-explorer.css';
import AnnotatedSource from '../annotated-source';
import SyntaxTree from '../syntax-tree';

function AstExplorerView({
  ast,
  highlightedNodeId,
  source,
  onHighlightedNodeChange,
  onSourceChange
}) {
  const handleSourceChange = (event) => onSourceChange(event.target.value);

  return <div className="ast-explorer">
    <textarea className="source-entry"
              value={source}
              onChange={handleSourceChange} />
    <AnnotatedSource ast={ast}
                     highlightedNodeId={highlightedNodeId}
                     source={source}
                     onHighlightedNodeChange={onHighlightedNodeChange} />
    <SyntaxTree ast={ast}
                highlightedNodeId={highlightedNodeId}
                onHighlightedNodeChange={onHighlightedNodeChange} />
  </div>;
}

export default AstExplorerView;
