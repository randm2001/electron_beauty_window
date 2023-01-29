const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 250,
      height: 250,
      transparent: true,
      frame: false, 
    })
  
    win.loadFile('index.html')
    win.show();
  }
  app.whenReady().then(() => {
    createWindow()
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
