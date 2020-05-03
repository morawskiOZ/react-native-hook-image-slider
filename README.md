### React Native Hook Image Slider

Light and bare minimum image slider for React Native. Written in TypeScript with React functional components and hooks.

## Install

`npm i react-native-hook-image-slider`

## Quickstart

```javascript
import React from 'react';
import { Slider } from 'react-native-hook-image-slider';

const Component = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View>
      <Slider slides={[image1, image2, image3]} />
    </View>
  );
}
```