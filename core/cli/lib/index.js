'use strict'

module.exports = core

// require：.js/ .json/ .node/
// .js -> modules.exports/exports
// .json -> JSON.parse
// .node -> process.dlopen
// any -> .js
const semver = require('semver')
const colors = require('colors/safe')
const log = require('@hyy-cli-dev/log')

const constant = require('./const')
const pkg = require('../package.json')

function core() {
  try {
    // checkNodeVersion()
    checkPkgVersion()
    checkRoot()
  } catch (e) {
    log.error(e.message)
  }
}

// 检查Root权限
function checkRoot() {
  const rootCheck = require('root-check')
  rootCheck()
  console.log(process.geteuid())
}

// 检查node版本
// function checkNodeVersion() {
//   // 1.获取当前node版本
//   const currentVersion = process.version
//   // 2.获取最低版本
//   const lowestVersion = constant.LOWEST_NODE_VERSION
//   // 3.比对，使用semver库
//   if (!semver.gte(currentVersion, lowestVersion)) {
//     throw new Error(colors.red(`hyy-cli-de 需要安装 v${lowestVersion} 以上版本的 Node.js`))
//   }
// }

// 检查包版本
function checkPkgVersion() {
  // console.log(pkg.version)
  // log.success('test', 'success...')
  // log.verbose('debug', 'debug...')
  log.notice('cli', pkg.version)
}
