const ipcRenderer = require('electron').ipcRenderer;
const webFrame = require('electron').webFrame;


// Listener of clicks on #compose button, when clicked, ipcRenderer send 'compose' signal to ipcMain in /main.js
document.querySelector('#compose').addEventListener('click', () => {
    ipcRenderer.send('compose')
});

// Blocking zooming in app
webFrame.setZoomLevelLimits(1, 1);