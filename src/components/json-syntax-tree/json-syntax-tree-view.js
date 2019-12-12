import React from 'react';
import './json-syntax-tree.css';

function JsonAstObjectView({ object, highlightedNodeId, depth, onHighlightedNodeChange }) {
  if (typeof object !== 'object' || object == null || object === undefined) {
    return <span className="primitive">{JSON.stringify(object)}</span>;
  }
  
  if (Array.isArray(object)) {
    if (object.length === 0) {
      return '[]';
    }

    const output = ['['];
    const childDepth = depth + 1;
    for (const [index, child] of object.entries()) {
      output.push('\n' + '  '.repeat(childDepth));
      output.push(
        <JsonAstObjectView object={child}
                           highlightedNodeId={highlightedNodeId}
                           depth={childDepth}
                           onHighlightedNodeChange={onHighlightedNodeChange}
                           key={index}/>
      );
      if (index < object.length - 1) {
        output.push(',');
      }
    }
    output.push('\n' + '  '.repeat(depth) + ']');
    return output;
  }

  const { astId = null, ...rest } = object;
  const keys = Object.keys(rest);
  if (keys.length === 0) {
    return ['{}']
  }

  const children = ['{'];
  const childDepth = depth + 1;
  for (const [index, key] of keys.entries()) {
    children.push('\n' + '  '.repeat(childDepth));
    children.push(JSON.stringify(key) + ': ');
    children.push(
      <JsonAstObjectView object={object[key]}
                         highlightedNodeId={highlightedNodeId}
                         depth={childDepth}
                         onHighlightedNodeChange={onHighlightedNodeChange}
                         key={index}/>
    );
    if (index < keys.length - 1) {
      children.push(',');
    }
  }
  children.push('\n' + '  '.repeat(depth) + '}');
  
  const handleMouseOver = astId == null ? null : (event) => {
    onHighlightedNodeChange(astId);
    event.stopPropagation();
  };
  const className = astId && astId === highlightedNodeId ? 'highlighted' : '';
  
  return <span className={className} onMouseOver={handleMouseOver}>
    {children}
  </span>;
}

function JsonSyntaxTreeView({ ast, highlightedNodeId, onHighlightedNodeChange }) {
  const clearHighlight = () => onHighlightedNodeChange(null);

  return <pre className="json-syntax-tree" onMouseLeave={clearHighlight}><code>
    <JsonAstObjectView object={ast}
                       highlightedNodeId={highlightedNodeId}
                       depth={0}
                       onHighlightedNodeChange={onHighlightedNodeChange} />
  </code></pre>;
}

export default JsonSyntaxTreeView;
