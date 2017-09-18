const ipcRenderer = require('electron').ipcRenderer;

// Listener of clicks on #compose button, when clicked, ipcRenderer send 'compose' signal
document.querySelector('#compose').addEventListener('click', () => {
    ipcRenderer.send('compose')
});