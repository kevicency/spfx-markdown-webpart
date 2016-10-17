declare interface IMarkdownStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'markdownStrings' {
  const strings: IMarkdownStrings;
  export = strings;
}
