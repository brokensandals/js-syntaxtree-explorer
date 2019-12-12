import React from 'react';
import AstExplorerView from './ast-explorer-view';
import * as esprima from 'esprima';
import { annotateAstWithIds } from '../../utils/ast-ids';

function parse(source) {
  try {
    const parsed = esprima.parseModule(source, { comments: true, range: true });
    const annotated = annotateAstWithIds(parsed);
    return annotated;
  } catch (error) {
    return { type: 'ParseError', message: error.message };
  }
}

function buildStateForSource(source) {
  return { source: source, ast: parse(source) };
}

class AstExplorerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = buildStateForSource(props.defaultSource);
    this.handleSourceChange = this.handleSourceChange.bind(this);
  }

  handleSourceChange(newSource) {
    this.setState(buildStateForSource(newSource));
  }

  render() {
    return <AstExplorerView ast={this.state.ast}
                            source={this.state.source}
                            onSourceChange={this.handleSourceChange} />;
  }
}

export default AstExplorerContainer;
