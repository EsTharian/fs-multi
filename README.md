# Node.js: fs-multi

`fs-multi` extends `fs-extra v8.1.0` for working multiple files.

## Installation

```shell script
npm install fs-multi
```

## Usage

`fs-multi` is a drop in replacement for `fs-extra v8.1.0`. All methods in `fs` and `fs-extra` are attached to `fs-multi`.

You don't ever need to include the native `fs` or `fs-extra` modules. You can now include only `fs-multi` module.

```javascript
const fs = require('fs-multi')
```

### multi(method, files[, callback])

[`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md) multiple files or directories.

- `method` `<String>` Methods may be `copy` or `move`.
- `files` `<Object>` Destinations, options and callback functions for each file. Each key of `<Object>` is referred to `src` (see: [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md)).
  - `dest` `<String>`
  - `opts` `<Object>`
      - `overwrite` `<boolean>`: default is `true` for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or default is `false` for [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md)
      - `errorOnExist` `<boolean>`: fot [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md)
      - `dereference` `<boolean>`: [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md)
      - `preserveTimestamps` `<boolean>`: [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md)
      - `filter` `<Function>`: [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md)
  - `callback` `<Function>`

#### Example:

Working with multiple files:

```js
const fs = require('fs-multi')

let files = {
  '/tmp/myfile': {
    target: '/tmp/mynewfile',
    callback: err => {
      if (err) console.error(err)
      else console.log('myfile success!')
    }
  },

  '/tmp/mysecondfile': {
    target: '/tmp/mysecondnewfile'
  }
}

fs.multi('copy', files).then(() => console.log('multiple processes completed')).catch(err => console.error(err))
```

Working with native [`fs`](https://nodejs.org/api/fs.html) and [`fs-extra`](https://github.com/jprichardson/node-fs-extra/tree/master/docs) methods:

```javascript
fs.copy('/tmp/mydir', '/tmp/mynewdir') //fs-extra 'copy' method

fs.copyFile('/tmp/myfile', '/tmp/mynewfile') //fs 'copyFile' method
```

## License

Licensed under [MIT](LICENSE)