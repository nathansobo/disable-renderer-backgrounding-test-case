'use strict'

const electron = require('electron')
electron.app.commandLine.appendSwitch('disable-renderer-backgrounding')
// These don't seem to work either
// electron.app.commandLine.appendSwitch('--disable-renderer-backgrounding')
// electron.app.commandLine.appendSwitch('--disable-renderer-backgrounding', '1')
// electron.app.commandLine.appendSwitch('--disable-renderer-backgrounding', 'true')

let window = null
electron.app.on('ready', function () {
  window = new electron.BrowserWindow({width: 800, height: 600})
  window.loadURL(`file://${__dirname}/index.html`)
})
