# React Native Hook Image Slider

Light and bare minimum image slider for React Native. Written in TypeScript with React functional components and hooks.

---


![SliderBox](docs/assets/preview.gif)

## Install

`npm i react-native-hook-image-slider`

or

`yarn add react-native-hook-image-slider`

## Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`images`**|`array`| Image source (either a remote URL or a local file resource)|`Yes`|None|
|**`height`**|`number`| Image height in px |`No`|`300`|
|**`loadingIndicatorColour`**|`string`| Color of loading indicator(image placeholder)|`No`| '#FFF' (black) |

## Quickstart

```javascript
import * as React from 'react';
import Slider from 'react-native-hook-image-slider';

const Component = () => {
  return (
      <Slider images={['./images/you_are_awesome.jpeg', 'https://yourCDNLink.com', 'home/project/profits/spreadsheet.jpeg']} />
  );
}
```
## Contribution

All contributions are welcome. If you need any feature hit me up with feature request or simply prepare a merge request with a descriptive name.