"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Box, Color, useInput, Static } = require("ink");

const shortText = `
this is some text
a few lines
long
`;

const longText = `
API
Since Ink is a React renderer, it means that all features of React are supported. Head over to React website for documentation on how to use it. In this readme only Ink's methods will be documented.



render(tree, options)
Returns: Instance

Mount a component and render the output.

tree
Type: ReactElement

options
Type: Object
Building Layouts
Ink uses Yoga - a Flexbox layout engine to build great user interfaces for your CLIs. It's important to remember that each element is a Flexbox container. Think of it as if each <div> in the browser had display: flex. See <Box> built-in component below for documentation on how to use Flexbox layouts in Ink.

Built-in Components
<Box>
<Box> it's an essential Ink component to build your layout. It's like a <div style="display: flex"> in a browser.

Import:

import {Box} from 'ink';
Dimensions
width
Type: number, string

Width of the element in spaces. You can also set it in percent, which will calculate the width based on the width of parent element.

<Box width={4}>X</Box> //=> 'X   '
<Box width={10}>
	<Box width="50%">X</Box>Y
</Box> //=> 'X    Y'
height
Type: number, string

Height of the element in lines (rows). You can also set it in percent, which will calculate the height based on the height of parent element.
render(tree, options)
Returns: Instance

Mount a component and render the output.

tree
Type: ReactElement

options
Type: Object
Building Layouts
Ink uses Yoga - a Flexbox layout engine to build great user interfaces for your CLIs. It's important to remember that each element is a Flexbox container. Think of it as if each <div> in the browser had display: flex. See <Box> built-in component below for documentation on how to use Flexbox layouts in Ink.

Built-in Components
<Box>
<Box> it's an essential Ink component to build your layout. It's like a <div style="display: flex"> in a browser.

Import:

import {Box} from 'ink';
Dimensions
width
Type: number, string

Width of the element in spaces. You can also set it in percent, which will calculate the width based on the width of parent element.

<Box width={4}>X</Box> //=> 'X   '
<Box width={10}>
	<Box width="50%">X</Box>Y
</Box> //=> 'X    Y'
height
Type: number, string

Height of the element in lines (rows). You can also set it in percent, which will calculate the height based on the height of parent element.
render(tree, options)
Returns: Instance

Mount a component and render the output.

tree
Type: ReactElement

options
Type: Object
Building Layouts
Ink uses Yoga - a Flexbox layout engine to build great user interfaces for your CLIs. It's important to remember that each element is a Flexbox container. Think of it as if each <div> in the browser had display: flex. See <Box> built-in component below for documentation on how to use Flexbox layouts in Ink.

Built-in Components
<Box>
<Box> it's an essential Ink component to build your layout. It's like a <div style="display: flex"> in a browser.

Import:

import {Box} from 'ink';
Dimensions
width
Type: number, string

Width of the element in spaces. You can also set it in percent, which will calculate the width based on the width of parent element.

<Box width={4}>X</Box> //=> 'X   '
<Box width={10}>
	<Box width="50%">X</Box>Y
</Box> //=> 'X    Y'
height
Type: number, string

Height of the element in lines (rows). You can also set it in percent, which will calculate the height based on the height of parent element.

See align-items.`;

let choice = 0;
const App = ({ name }) => {
  const [selection, setSelection] = React.useState(shortText);
  const [keypresses, setKeypresses] = React.useState([]);
  useInput((input, key) => {
    setKeypresses(keypresses.concat([input]));
    if (key.return) {
      if (choice === 0) {
        setSelection(longText);
        choice = 1;
      } else {
        setSelection(shortText);
        choice = 0;
      }
    }
  });

  return (
    <Box>
      <Static>
        {keypresses.map((k, i) => (
          <Text key={i}>{k}</Text>
        ))}
      </Static>
      <Text>{selection}</Text>
    </Box>
  );
};

module.exports = App;
