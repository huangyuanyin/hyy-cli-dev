'use strict'

module.exports = core

// require：.js/ .json/ .node/
// .js -> modules.exports/exports
// .json -> JSON.parse
// .node -> process.dlopen
// any -> .js
const pkg = require('../package.json')
const log = require('@hyy-cli-dev/log')

function core() {
  checkPkgVersion()
}

function checkPkgVersion() {
  // console.log(pkg.version)
  // log.success('test', 'success...')
  // log.verbose('debug', 'debug...')
  log.notice('cli', pkg.version)
}
