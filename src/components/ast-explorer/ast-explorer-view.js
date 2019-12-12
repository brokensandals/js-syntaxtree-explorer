import React from 'react';
import './ast-explorer.css';
import AnnotatedSource from '../annotated-source';
import SyntaxTree from '../syntax-tree';
import JsonSyntaxTreeView from '../json-syntax-tree/json-syntax-tree-view';

function AstExplorerView({
  ast,
  highlightedNodeId,
  source,
  treeStyle,
  onHighlightedNodeChange,
  onSourceChange,
  onTreeStyleChange,
}) {
  const handleSourceChange = (event) => onSourceChange(event.target.value);
  const handleTreeStyleChange = () => onTreeStyleChange(treeStyle === 'json' ? 'styled' : 'json');

  return <div className="ast-explorer">
    <textarea className="source-entry"
              value={source}
              onChange={handleSourceChange} />
    <AnnotatedSource ast={ast}
                     highlightedNodeId={highlightedNodeId}
                     source={source}
                     onHighlightedNodeChange={onHighlightedNodeChange} />
    <button className="change-tree-style"
            onClick={handleTreeStyleChange}>
      {treeStyle === 'json' ? 'switch to styled view' : 'switch to json view'}
    </button>
    {treeStyle === 'json' ?
      <JsonSyntaxTreeView ast={ast}
        highlightedNodeId={highlightedNodeId}
        onHighlightedNodeChange={onHighlightedNodeChange} />
      :
      <SyntaxTree ast={ast}
                highlightedNodeId={highlightedNodeId}
                onHighlightedNodeChange={onHighlightedNodeChange} />}
  </div>;
}

export default AstExplorerView;
