const ipcRenderer = require('electron').ipcRenderer;

// Listener of clicks on #compose button, when clicked, ipcRenderer send 'compose' signal to ipcMain in /main.js
document.querySelector('#compose').addEventListener('click', () => {
    ipcRenderer.send('compose')
});