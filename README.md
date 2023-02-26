# React Text Highlight Popup

> React Text Highlight Popup is a React component that allows you to highlight text and display a popup with custom actions when the user clicks on the highlighted text "medium-like".


## Installation

```bash
npm install react-highlight-pop
```

## Usage

To use react-text-highlight-popup, import the TextHighlightPopup component and pass it the necessary props:

```tsx
import React from 'react';
import { HighlightedText } from 'react-text-highlight-popup';

interface Range {
  from: number
  to: number
}
interface props {
  text: string
  Range: Range[]
  popupActions?: {
    label: string
    action: (selectedText: string, textRange: Range) => void
  }[]

const ExampleComponent: React.FC<Props> = ({
  text,
  range,
  popupActions,
  highlightedTextClass,
  popupClass,
}) => (
  <div>
    <HighlightedText
      text={text}
      range={range}
      popupActions={popupActions}
      highlightedTextClass={highlightedTextClass}
      popupClass={popupClass}
    />
  </div>
);
```
The  **TextHighlightPopup**  component takes the following props:
  -  **text**  (required): The text to highlight.
  - **range** (required): An array of objects representing the range of text to highlight. Each object should have a from and to property representing the start and end indexes of the range.
  - **popupActions** (optional): An array of objects that define the actions to display in the popup. Each object should have a **label** and an **action** property. The **action** property is a function that will be called with the selected text and the text range when the user clicks on the action.
  - **highlightedTextClass** (optional): A string representing the CSS class to apply to the highlighted text.
  - **popupClass** (optional): A string representing the CSS class to apply to the popup.
  
## Example

Here is an example usage of react-text-highlight-popup: 

```tsx
import React from 'react';
import { HighlightedText } from 'react-text-highlight-popup';

const App: React.FC = () => {
  const text = 'This is some example text to highlight.';
  const range = [{ from: 5, to: 10 }, { from: 18, to: 24 }];
  const  popupActions = [
    {
      label: 'Action 1',
      action: (selectedText, textRange) => {
        console.log(`Selected text: ${selectedText}`);
        console.log(`Text range: ${JSON.stringify(textRange)}`);
      },
    },
    {
      label: 'Action 2',
      action: (selectedText, textRange) => {
        console.log(`Selected text: ${selectedText}`);
        console.log(`Text range: ${JSON.stringify(textRange)}`);
      },
    },
  ];

  return (
    <div>
      <HighlightedText
        text={text}
        range={range}
        popupActions={popupActions}
        highlightedTextClass="highlighted"
        popupClass="popup"
      />
    </div>
  );
};

export default App;
```
In this example, the text "example" and "highlight" will be highlighted, and a popup with two buttons will be displayed when the user clicks on the highlighted text.
  
  
## Props
prop|Type|description
---|---|---
text|string| The text to highlight.
range|{ from: number, to: number }[]| An array of objects representing the range of text to highlight. Each object should have a from and to property representing the start and end indexes of the range.
popupActions|{
     label: string
    action: (selectedText: string, textRange: { from: number, to: number }) => void
}| An array of React elements representing the custom actions to display in the popup.
