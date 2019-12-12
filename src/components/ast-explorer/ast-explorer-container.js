import React from 'react';
import AstExplorerView from './ast-explorer-view';
import * as esprima from 'esprima';
import { annotateAstWithIds } from '../../utils/ast-ids';

function parse(source) {
  try {
    const parsed = esprima.parseModule(source, { comment: true, range: true });
    const annotated = annotateAstWithIds(parsed);
    return annotated;
  } catch (error) {
    return { type: 'ParseError',
             message: error.message,
             astId: 1,
             range: [0, source.length] };
  }
}

function buildStateForSource(source) {
  return { source: source, ast: parse(source) };
}

class AstExplorerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = buildStateForSource(props.defaultSource);
    this.state.highlightedNodeId = null;
    this.state.treeStyle = props.defaultTreeStyle || 'styled';
    this.handleHighlightedNodeChange = this.handleHighlightedNodeChange.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleTreeStyleChange = this.handleTreeStyleChange.bind(this);
  }

  handleHighlightedNodeChange(newNodeId) {
    this.setState({ highlightedNodeId: newNodeId });
  }

  handleSourceChange(newSource) {
    this.setState(buildStateForSource(newSource));
  }

  handleTreeStyleChange(newStyle) {
    this.setState({ treeStyle: newStyle });
  }

  render() {
    return <AstExplorerView ast={this.state.ast}
                            highlightedNodeId={this.state.highlightedNodeId}
                            source={this.state.source}
                            treeStyle={this.state.treeStyle}
                            onHighlightedNodeChange={this.handleHighlightedNodeChange}
                            onSourceChange={this.handleSourceChange}
                            onTreeStyleChange={this.handleTreeStyleChange} />;
  }
}

export default AstExplorerContainer;
