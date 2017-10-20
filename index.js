'use strict';


const electron = require('electron')
const {app, BrowserWindow} = electron
require('electron-reload')(__dirname);

let win

app.on('ready', () => {
    win = new BrowserWindow({width:400, height:500, resizable:false})
    win.setMenu(null);
    win.loadURL(`file://${__dirname}/templates/index.html`)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

  exports.openWindow = (filename) => {
    let win = new BrowserWindow({resizable:true,fullscreen:true})
    win.setMenu(null);
    win.loadURL(`file://${__dirname}/templates/` + filename + `.html`)
}
