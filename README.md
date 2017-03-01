# React Switch Button control

A Switch control built with and for [React](http://facebook.github.io/react/index.html)

## Demo & Example

Example: [http://gfazioli.github.io/react-switch-button](http://gfazioli.github.io/react-switch-button)
Live demo: [Online Demo](http://gfazioli.github.io/react-switch-button#demo)

## Installation

You can use React Switch Button by using NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

```javascript
npm install react-switch-button --save
```

At this point you can import `react-switch-button` and its styles in your application as follows:

```js
import SwitchButton from 'react-switch-button';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-switch-button/dist/react-switch-button.css';
```

or

```js
const SwitchButton = require( 'react-switch-button' );
```

and then include the *css* in your HTML page.

Of course, you can also use the standalone build by including `react-switch-button.js` and `react-switch-button.css` in your page. (If you do this though you'll also need to include the dependencies.) For example:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
<script src="https://unpkg.com/classnames/index.js"></script>
<script src="https://unpkg.com/react-switch-button/dist/react-switch-button.js"></script>

<link rel="stylesheet" href="https://unpkg.com/react-switch-button/dist/react-switch-button.css">
```

# Contributing

Thanks for any your contribute.

# License

MIT Licensed. Copyright (c) Giovambattista Fazioli 2017.
