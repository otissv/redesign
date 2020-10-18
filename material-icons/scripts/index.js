const glob = require('glob-promise')

const { createIcons } = require('./createIcons')
const { createIndexExports } = require('./createIndexExports')
const { createStories } = require('./createStories')
const { errorHandler, rmdir, map } = require('./utils')
const { build } = require('./build')

glob('./svg/**/*.svg')
  .then(map(createIcons))
  .then(createIndexExports)
  .then(createStories)
  .then(build)
  .catch(errorHandler)
