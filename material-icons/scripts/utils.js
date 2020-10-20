const T2W = require('numbers2words')
const camelCase = require('lodash/fp/camelCase')
const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const upperFirst = require('lodash/fp/upperFirst')
const util = require('util')
const { sleep } = require('sleep')
const childProcess = require('child_process')

const writeFile = util.promisify(fs.writeFile)
exports.writeFile = writeFile

const readFile = util.promisify(fs.readFile)
exports.readFile = readFile

const exec = util.promisify(childProcess.exec)
exports.exec = exec

let translator = new T2W('EN_US')

function errorHandler(error) {
  process.stdout.write(error)
  process.exit(1)
}
exports.errorHandler = errorHandler

function fileNameBeginsWithNumberToWord(file) {
  let fileName = file

  const fileNameBeginsWithNumber = file.match(/^(\d)(.*)/)

  if (fileNameBeginsWithNumber) {
    fileName = `${translator.toWords(
      parseInt(fileNameBeginsWithNumber[1], 10)
    )}-${fileNameBeginsWithNumber[2]}`
  } else {
  }

  return toFileName(fileName)
}

exports.fileNameBeginsWithNumberToWord = fileNameBeginsWithNumberToWord

const foldPaths = ({ paths }) => paths
exports.foldPaths = foldPaths

function getPathsInfo(path) {
  try {
    if (typeof path !== 'string') {
      throw 'getPathsInfo: path must be string'
    }
    return {
      path,
      ...svgPathInfo(path),
    }
  } catch (error) {
    errorHandler(error)
  }
}
exports.getPathsInfo = getPathsInfo

const map = fn => list => {
  list.map(i => fn(i))
  return list
}
exports.map = map

async function removeOutputDir(paths) {
  try {
    const path = require('path')
    await rmdir('./src')
    sleep(5)
    await mkdirp('./src/icons')

    return paths
  } catch (error) {
    console.log(error)
    return paths
  }
}
exports.removeOutputDir = removeOutputDir

const rmdir = path =>
  rimraf(path, error =>
    error ? Promise.reject(error) : Promise.resolve(`rmdir success: ${path}`)
  )
exports.rmdir = rmdir

function svgPathInfo(path) {
  // const match = path.match(/\.\/svg\/(.*)(\/)([\w\s]+(.*))/)

  const match = path.match(/\.\/svg\/(.*)(\.svg)/)
  const file = match[1]

  return {
    // dir,
    fileName: fileNameBeginsWithNumberToWord(file),
  }
}
exports.svgPathInfo = svgPathInfo

const toFileName = str => upperFirst(camelCase(str))
exports.toFileName = toFileName

async function writeDateToFile({ data, fileName, dest, ...props }) {
  try {
    await await mkdirp(dest)
    await writeFile(`${dest}/${fileName}.tsx`, data, { flag: 'w' })

    return {
      ...props,
      data,
      fileName,
      dest,
    }
  } catch (error) {
    errorHandler(error)
  }
}
exports.writeDateToFile = writeDateToFile
