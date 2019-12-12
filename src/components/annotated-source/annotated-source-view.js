import React from 'react';
import './annotated-source.css';
import { findChildNodes } from '../../utils/ast-flattening';

function SourceForNode({
  highlightedNodeId,
  node,
  source,
  onHighlightedNodeChange
}) {
  let cur = node.range[0];
  const children = [];

  for (const child of findChildNodes(node)) {
    if (cur < child.range[0]) {
      children.push(source.slice(cur, child.range[0]));
    }

    children.push(<SourceForNode key={child.astId}
                                 highlightedNodeId={highlightedNodeId}
                                 node={child}
                                 source={source}
                                 onHighlightedNodeChange={onHighlightedNodeChange} />);
    cur = child.range[1];
  }

  if (cur < node.range[1]) {
    children.push(source.slice(cur, node.range[1]));
  }

  const handleMouseOver = (event) => {
    onHighlightedNodeChange(node.astId);
    event.stopPropagation();
  };

  const className = node.astId === highlightedNodeId ? 'highlighted' : '';

  return <span className={className} onMouseOver={handleMouseOver}>
    {children}
  </span>;
}

function AnnotatedSourceView({
  ast,
  highlightedNodeId,
  source,
  onHighlightedNodeChange
}) {
  return <pre className="annotated-source"><code>
    <SourceForNode highlightedNodeId={highlightedNodeId}
                   node={ast}
                   source={source}
                   onHighlightedNodeChange={onHighlightedNodeChange} />
  </code></pre>;
}

export default AnnotatedSourceView;
