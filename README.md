# Node.js: fs-multi

`fs-multi` extends `fs-extra v9.0.0` for working multiple files.

## Installation

```shell script
npm install fs-multi
```

## Usage

`fs-multi` is a drop in replacement for `fs-extra v9.0.0`. All methods in `fs` and `fs-extra` are attached to `fs-multi`.

You don't ever need to include the native `fs` or `fs-extra` modules. You can now include only `fs-multi` module.

```javascript
const fs = require('fs-multi')
```

### multi(method, files)

[`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md) multiple files or directories.

- `method` `<string>` Methods may be `copy` or `move`.
- `files` `<Object>` Destinations, options and callback functions or `<string>` as only destinations for each file. Each key of `<Object>` is referred to `src` (see: [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md)).
  - `dest` `<string>` Destination
  - `opts` `<Object>` Options
      - `overwrite` `<boolean>`: default is `true` for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) or default is `false` for [`move`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/move.md)
      - `errorOnExist` `<boolean>`: for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) only
      - `dereference` `<boolean>`: for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) only
      - `preserveTimestamps` `<boolean>`: for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) only
      - `filter` `<Function>`: for [`copy`](https://github.com/jprichardson/node-fs-extra/tree/master/docs/copy.md) only

#### Example:

Working with multiple files:

```js
const fs = require('fs-multi')

let files = {

  // dest is in <Object>
  '/tmp/myfile': {
    dest: '/tmp/mynewfile',
    callback: err => {
      if (err) console.error(err)
      else console.log('myfile success!')
    }
  },

  // dest is <string> itself
  '/tmp/mysecondfile': '/tmp/mysecondnewfile'
}

fs.multi('copy', files).then(
  () => console.log('multiple processes completed'))
    .catch(err => console.error(err)
)
```

Working with native [`fs`](https://nodejs.org/api/fs.html) and [`fs-extra`](https://github.com/jprichardson/node-fs-extra/tree/master/docs) methods:

```javascript
fs.copy('/tmp/mydir', '/tmp/mynewdir') //fs-extra 'copy' method

fs.copyFile('/tmp/myfile', '/tmp/mynewfile') //fs 'copyFile' method
```

## License

Licensed under [MIT](LICENSE)