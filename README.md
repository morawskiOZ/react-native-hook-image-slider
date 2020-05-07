# React Native Hook Image Slider

Light and bare minimum image slider for React Native. Written in TypeScript with React functional components and hooks.

---

![SliderBox](docs/assets/preview.gif)

## Install

`npm i react-native-hook-image-slider`

or

`yarn add react-native-hook-image-slider`

## Props

| Prop                         | Type       | Description                                                 | Required | Default        |
| ---------------------------- | ---------- | ----------------------------------------------------------- | -------- | -------------- |
| **`images`**                 | `string[]` | Image source (either a remote URL or a local file resource) | `Yes`    | None           |
| **`imageHeight`**            | `number`   | Image height in px                                          | `No`     | 300            |
| **`loadingIndicatorColour`** | `string`   | Color of loading indicator(image placeholder)               | `No`     | '#000' (black) |
| **`separatorWidth`**         | `number`   | Width of the separator between images                       | `No`     | 0              |
| **`separatorColor`**         | `string`   | Separator color (only if separatorWidth > 0)                | `No`     | '#FFF' (white) |
| **`activeDotColor`**         | `string`   | Color of active pagination dot                              | `No`     | '#000' (black) |
| **`emptyDotColor`**          | `string`   | Color of inactive pagination dot                            | `No`     | '#FFF' (white) |

## Quickstart

```javascript
import * as React from "react"
import { View } from "react-native"
import Slider from "react-native-hook-image-slider"

const Component = () => {
  return (
    <View>
      <Slider
        images={[
          "./images/you_are_awesome.jpeg",
          "https://yourCDNLink.com/cat.jpeg",
          "home/project/profits/spreadsheet.jpeg",
        ]}
      />
    </View>
  )
}
```

## Contribution

All contributions are welcome. If you need any feature hit me up with feature request or do it yourself and prepare a merge request with a descriptive name.
