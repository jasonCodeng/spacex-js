=============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/spacex-js.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/spacex-js
[travis-image]: https://img.shields.io/travis/jasonCodeng/spacex-js.svg?style=flat-square
[travis-url]: https://travis-ci.org/jasonCodeng/spacex-js
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

[SpaceX-API](https://github.com/r-spacex/SpaceX-API) JavaScript Wrapper

Install
-------

    npm install --save spacex-js


Usage
-----

**Note:** spacex-js depends on [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) being defined globally.

- If you are using this in electron, it should work without any configuration.
- If you are using this in Node.js, you will need to use [`node-fetch`](https://www.npmjs.com/package/node-fetch).

  **Example:**
  ```js
  global.fetch = require('node-fetch')
  const spacex = require('spacex-js')
  ```

## License

[MIT](LICENSE.md)