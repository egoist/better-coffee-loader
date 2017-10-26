
# better-coffee-loader

[![NPM version](https://img.shields.io/npm/v/better-coffee-loader.svg?style=flat)](https://npmjs.com/package/better-coffee-loader) [![NPM downloads](https://img.shields.io/npm/dm/better-coffee-loader.svg?style=flat)](https://npmjs.com/package/better-coffee-loader) [![CircleCI](https://circleci.com/gh/egoist/better-coffee-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/better-coffee-loader/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add coffeescript better-coffee-loader --dev
```

## Usage

webpack.config.js:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'better-coffee-loader',
        // Options for coffeescript compiler
        options: {}
      }
    ]
  }
}
```

## API

### options

Basically all options in [CoffeeScript's node.js API](http://coffeescript.org/#nodejs-usage). Note that `sourceMap` is always `true` here.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**better-coffee-loader** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/better-coffee-loader/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
