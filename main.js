const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;

const BrowserWindow = electron.BrowserWindow;

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname)
}

let mainWindow = null;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 400,
        icon: './cpu.png',
        show: true
    });

    // and load the index.html of the app.
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(`http://localhost:3000`)
    } else {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

// This method will be called when Electron has finished
app.on('ready', () => {
    createWindow();
    /*mainWindow.on('ready-to-show', () => {
       mainWindow.show()
    });*/
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// If mainWindow is null and we want to activate it, it will be called
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

// ipcMain is listening for 'compose' from ipcRenderer in /renderer.js
ipcMain.on('compose', () => {
   createWindow();
});
