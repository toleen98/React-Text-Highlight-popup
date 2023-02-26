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

interface Props {
  text: string;
  range: {
    from: number;
    to: number;
  }[];
  popupActions?: JSX.Element[];
  highlightedTextClass?: string;
  popupClass?: string;
}

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
  - **popupActions** (optional): An array of React elements representing the custom actions to display in the popup.
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
  const popupActions = [
    <button key="action-1" onClick={() => console.log('Action 1 clicked')}>
      Action 1
    </button>,
    <button key="action-2" onClick={() => console.log('Action 2 clicked')}>
      Action 2
    </button>,
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
popupActions|JSX.Element[]| An array of React elements representing the custom actions to display in the popup.
