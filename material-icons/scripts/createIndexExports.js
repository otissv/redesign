const {
  errorHandler,
  getPathsInfo,
  writeDateToFile,
  foldPaths,
} = require('./utils')

function createIndexExports(paths) {
  return makeIndex(paths)
    .then(writeDateToFile)
    .then(foldPaths)
    .catch(errorHandler)
}
exports.createIndexExports = createIndexExports

async function makeIndex(paths) {
  try {
    const exportsString = paths.reduce((acc, path) => {
      const { fileName } = getPathsInfo(path)

      return `${acc}
  export * from './icons/${fileName}'`
    }, '')

    return {
      paths,
      data: exportsString,
      dest: './src',
      fileName: 'index',
    }
  } catch (error) {
    errorHandler(errorHandler)
  }
}
