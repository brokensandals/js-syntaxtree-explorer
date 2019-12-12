import React from 'react';
import './syntax-tree.css';

function AstObjectView({ object, highlightedNodeId, onHighlightedNodeChange }) {
  const { astId = null, type = null, range = null, ...rest } = object;
  const typeElement = type ? <span className="type">{type}</span> : null;
  const rangeElement = range ? <span className="range">{range[0]}-{range[1]}</span> : null;

  const entries = [];

  for (const key in rest) {
    const val = object[key];

    if (Array.isArray(val)) {
      entries.push([1, key,
        <ol>
          {val.map((el, index) => (
            <li key={index}>
              <AstObjectView object={el}
                             highlightedNodeId={highlightedNodeId}
                             onHighlightedNodeChange={onHighlightedNodeChange} />
            </li>
          ))}
        </ol>
      ]);
    } else if (typeof val === 'object' && val != null) {
      entries.push([1, key,
        <AstObjectView object={val}
                       highlightedNodeId={highlightedNodeId}
                       onHighlightedNodeChange={onHighlightedNodeChange} />
      ]);
    } else {
      entries.push([0, key, <span className="primitive">{JSON.stringify(val)}</span>]);
    }
  }

  entries.sort();

  const handleMouseOver = astId == null ? null : (event) => {
    onHighlightedNodeChange(astId);
    event.stopPropagation();
  }

  const className = [
    'ast-object',
    astId && astId === highlightedNodeId ? 'highlighted' : null
  ].join(' ');

  return <div className={className}
              onMouseOver={handleMouseOver}>
    {typeElement} {rangeElement}
    <dl>
      {entries.map(([_, key, val], index) =>
        [
          <dt key={'k' + index}>{key}</dt>,
          <dd key={'v' + index}>{val}</dd>
        ])}
    </dl>
  </div>
}

function SyntaxTreeView({ ast, highlightedNodeId, onHighlightedNodeChange }) {
  const clearHighlight = () => onHighlightedNodeChange(null);

  return <div className="syntax-tree" onMouseLeave={clearHighlight}>
    <AstObjectView object={ast}
                   highlightedNodeId={highlightedNodeId}
                   onHighlightedNodeChange={onHighlightedNodeChange} />
  </div>
}

export default SyntaxTreeView;
