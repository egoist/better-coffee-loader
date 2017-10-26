import path from 'path'
import test from 'ava'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'

function runWebpack(mfs, config) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config)
    compiler.outputFileSystem = mfs
    compiler.run((err, stats) => {
      if (err) return reject(err)
      if (stats.hasErrors())
        return reject(new Error(stats.toString('errors-only')))
      resolve(stats)
    })
  })
}

test('main', async t => {
  const mfs = new MemoryFS()
  await runWebpack(mfs, {
    entry: path.join(__dirname, 'fixture.coffee'),
    output: {
      path: '/out'
    },
    module: {
      rules: [
        {
          test: /\.coffee$/,
          loader: require.resolve('..')
        }
      ]
    }
  })
  const content = mfs.readFileSync('/out/main.js', 'utf8')
  t.snapshot(content)
})
