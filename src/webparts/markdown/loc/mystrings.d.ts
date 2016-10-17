declare interface IMarkdownStrings {
  PropertyPaneDescription: string;
  ContentFieldLabel: string;
}

declare module 'markdownStrings' {
  const strings: IMarkdownStrings;
  export = strings;
}
