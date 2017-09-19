const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;

const BrowserWindow = electron.BrowserWindow;

// When development mode is activated, automatic reloads are activated
if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname)
}

let mainWindow = null;

function createWindow () {
    // Create the mainWindow
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        minWidth: 600,
        minHeight: 400,
        icon: './cpu.png',
        backgroundColor: '#ffffff',
        show: false
    });

    // and load the index.html of the app
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(`http://localhost:3000`)
    } else {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
    }

    // Emitted when the mainWindow is closed.
    mainWindow.on('closed', () => {
        mainWindow = null
    });

    // When the mainWindow is rendered, it will be shown (preventing awful blank screen)
    mainWindow.on('ready-to-show', () => {
       mainWindow.show();
       mainWindow.focus();
    });
}

// This method will be called when Electron has finished preparing
app.on('ready', () => {
    // Change menu to my own in menu.js
    require('./src/js/menu');
    // Create mainWindow
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar to not close
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// If the mainWindow is null and we want to activate it, this will create one
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

// ipcMain is listening for 'compose' from ipcRenderer in /renderer.js
ipcMain.on('compose', () => {
   createWindow();
});
