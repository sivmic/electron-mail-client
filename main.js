const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname)
}

let mainWindow = null;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        icon: './cpu.png'
    });

    // and load the index.html of the app.
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(`http://localhost:3000`)
    } else {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

// This method will be called when Electron has finished
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// If mainWindow is null, it will be called
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
