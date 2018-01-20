const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;

// Require 'windows' and 'menu'
const windows = require('./src/js/windows');
const menu = require('./src/js/menu');
const file = require('./src/js/file');
const prompt = require('./src/js/prompt');

// When development mode is activated, automatic reloads are activated
if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname)
}

// This method will be called when Electron has finished preparing
app.on('ready', () => {
    // Set the menu for the app
    menu.setMenu();
    // Create mainWindow
    windows.createMainWindow();

    // if (!file.checkFile()) {
    //     //prompt.loginPrompt(windows.mainWindow);
    // }

    let mail = file.mail;
    let password = file.password;
    global.account = {mail: mail, password: password};
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar to not close
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// If the mainWindow is null and app is activated, this will create one
app.on('activate', () => {
    // On macOS is common to re-open window if dock icon is clicked when all windows are closed
    if (windows.mainWindow === null) {
        windows.createMainWindow()
    }
});

// ipcMain is listening for 'compose' from ipcRenderer in /renderer.js
ipcMain.on('compose', () => {
    windows.createMainWindow();
});
