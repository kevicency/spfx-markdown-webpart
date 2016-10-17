import * as React from 'react';
import ReactMarkdown = require('react-markdown');

import { IMarkdownWebPartProps } from '../IMarkdownWebPartProps';

export interface IMarkdownViewProps extends IMarkdownWebPartProps {
}

export default class MarkdownContent extends React.Component<IMarkdownViewProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="ql-editor">
        <ReactMarkdown source={this.props.content} />
      </div>
    );
  }
}
