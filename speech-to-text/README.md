## React Speech to text


### Usage: 

`npm install react-speech-to-text`


<sup>* Requires `react` as a peer dependency: `npm install react`</sup>


```
import React from "react";
import { render } from "react-dom";
import SpeechToText from "react-speech-to-text";

const App = () => (
  <SpeechToText languageCode="en-US" />
);

render(<App />, document.body);
```

### Props

| Prop Name  | Type | Default Value | Description |
| ------------- | ------------- | ------------- | ------------- |
| languageCode | string | `en-US` | language code that needed to translate (only this language audio this will be converted to text) |


### Limitations
- Voice must be clear and precise
