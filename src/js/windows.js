const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

// This allow program to track window and save its state
const windowStateKeeper = require('electron-window-state');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

// Set importable functions/variables
module.exports = {
    createMainWindow: () => {
        // Initialize mainWindowState with default values
        let mainWindowState = windowStateKeeper({
            defaultWidth: 600,
            defaultHeight: 400
        });
        // Create the mainWindow
        mainWindow = new BrowserWindow({
            title: "Mail client", // Set title of app
            icon: __dirname + '/assets/icon/icon.png', // Set app icon
            x: mainWindowState.x, // Get value of 'x' from mainWindowState
            y: mainWindowState.y, // Get value of 'y' from mainWindowState
            width: mainWindowState.width, // Get value of 'width' from mainWindowState
            height: mainWindowState.height, // Get value of 'height' from mainWindowState
            minWidth: 600,
            minHeight: 400,
            backgroundColor: '#ffffff',
            show: false // Hide window (because that awful blank screen)
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

        // Allow mainWindowState to watch mainWindow's x, y, width and height
        mainWindowState.manage(mainWindow);
    },
    // When /windows.js is required from another file, mainWindow is readable
    mainWindow
};