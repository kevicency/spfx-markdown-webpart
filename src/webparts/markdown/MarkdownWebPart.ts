import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'markdownStrings';
import MarkdownView, { IMarkdownViewProps } from './components/MarkdownView';
import { IMarkdownWebPartProps } from './IMarkdownWebPartProps';

const defaultContent = `
# My Markdown Webpart

Write your markdown here...
`

export default class MarkdownWebPart extends BaseClientSideWebPart<IMarkdownWebPartProps> {
  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IMarkdownViewProps> = React.createElement(MarkdownView, {
      content: this.properties.content
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('content', {
                  label: strings.ContentFieldLabel,
                  multiline: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
