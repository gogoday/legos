# legos

a lot of functions.

## Getting Started
### On the server
Install the module with: `npm install legos`

```javascript
var legos = require('legos');
legos.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/gogoday/legos/master/dist/legos.min.js
[max]: https://raw.github.com/gogoday/legos/master/dist/legos.js

In your web page:

```html
<script src="dist/legos.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach legos's methods to any object.

```html
<script>
var exports = Bocoup.utils;
</script>
<script src="dist/legos.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

[gruntjs](http://www.gruntjs.net/getting-started#grunt)

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 gogoday  
Licensed under the MIT license.
