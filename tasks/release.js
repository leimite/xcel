'use strict'

const exec = require('child_process').exec
const packager = require('electron-packager')

// ANSI color codes
// http://pueblo.sourceforge.net/doc/manual/ansi_color_codes.html
let RED = '\x1b[31m'
let YELLOW = '\x1b[33m'
let BLUE = '\x1b[34m'
let END = '\x1b[0m'

if (process.env.PLATFORM_TARGET === 'clean') {
  require('del').sync(['builds/*', '!.gitkeep'])
  console.log(`${YELLOW}builds directory cleaned.\n${END}`)
} else pack()

/**
 * Build webpack in production
 */
function pack() {
  console.log(`${YELLOW}Building webpack in production mode...\n${END}`)
  let pack = exec('npm run pack_ori:electron-packager')

  pack.stdout.on('data', data => console.log(data))
  pack.stderr.on('data', data => console.error(data))
  pack.on('exit', code => build())
}


/**
 * Use electron-packager to build electron app
 */
function build() {
  let options = require('../config').building

  console.log(`${BLUE}Building electron app(s)...\n${END}`)
  packager(options, (err, appPaths) => {
    if (err) {
      console.error(`${RED}Error from electron - packager when building app...${END}`)
      console.error(err)
    } else {
      console.log('Build(s) successful!')
      console.log(appPaths)

      console.log(`\n${BLUE}DONE\n${END}`)
    }
  })
}
