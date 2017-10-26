const path = require('path')
const coffee = require('coffeescript')
const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = Object.assign({}, loaderUtils.getOptions(this), {
    sourceMap: true
  })

  const { js, v3SourceMap } = coffee.compile(source, options)
  const map = JSON.parse(v3SourceMap)

  map.file = this.resourcePath
  map.sources[0] = path.relative(process.cwd(), this.resourcePath)
  map.sourceRoot = process.cwd()

  this.cacheable && this.cacheable()
  this.callback(null, js, map)
}
