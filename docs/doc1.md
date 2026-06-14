# Start with first few react native component - View, Text, Image

In this section, we will learn about the basic building blocks of a React Native application - the components. We will start with three fundamental components: View, Text, and Image.

## View Component
The View component is a container. It is the most basic building block of a React Native app and is used to create a layout for other components.
```tsx
import React from 'react';
import { View} from 'react-native'; 

export default function App() {
  return (
    <View style={styles.container}>
      {/* Other components will go here */}
    </View>
  );
}
```

## Text Component
The Text component is used to display text in a React Native application. It supports styling and nesting of text elements.
```tsx
import React from 'react';
import { View, Text } from 'react-native';   

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
}
```

### introduction to prop ( noOFLines ) -

The Text component can also accept props to customize its behavior. For example, we can use the `numberOfLines` prop to limit the number of lines of text displayed.
```tsx

import React from 'react';
import { View, Text } from 'react-native';  

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        This is a long text that will be truncated after one line.
      </Text>
    </View>
  );
}
```

## Image Component
The Image component is used to display images in a React Native application. It supports various sources, including local files and remote URLs.
for remote images, we can use the `uri` property to specify the image source.
```tsx
import React from 'react';
import { View, Image } from 'react-native'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
    </View>
  );
}
```

for local images, we can use the `require` function to specify the image source.
 like this -
```tsx
<Image
    source={require('./path/to/image.png')}
    style={styles.image}/>
```

- 
```tsx
      <Text>
        <Text>Hi </Text>
        <Text>How are you</Text>
      </Text>
      ```
In this example, we have a parent Text component that contains two child Text components. The parent Text component will render the text "Hi How are you" as a single line, and the child Text components will allow us to style each part of the text differently if needed.
mean the text component can be nested inside another text component. This allows us to create complex text layouts and apply different styles to different parts of the text.

now to go to official documentation of these components, you can click on the links below:
- [View Component Documentation](https://reactnative.dev/docs/view)
- [Text Component Documentation](https://reactnative.dev/docs/text)
- [Image Component Documentation](https://reactnative.dev/docs/image)

