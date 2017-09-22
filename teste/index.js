'use strict';


const electron = require('electron')
const {app, BrowserWindow} = electron
require('electron-reload')(__dirname);

let win

app.on('ready', () => {
    win = new BrowserWindow({width:400, height:500})
    win.setMenu(null);
    win.loadURL(`file://${__dirname}/templates/index.html`)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }

  exports.openWindow = (filename) => {
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(`file://${__dirname}/` + filename + `.html`)
}

})
