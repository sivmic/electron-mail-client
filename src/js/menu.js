const {app, Menu} = require('electron');

const template = [
    {
        label: 'Edit',
        submenu: [
            {role: 'undo', label: 'Undo', accelerator: 'CmdOrCtrl+Z'},
            {role: 'redo', label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload', label: 'Reload', accelerator: 'CmdOrCtrl+R'},
            {role: 'toggledevtools', label: 'Toggle DevTools', accelerator: 'Alt+CmdOrCtrl+I'}
        ]
    },
    {
        role: 'window',
        submenu: [
            {role: 'close', label: 'Close', accelerator: 'CmdOrCtrl+W'},
            {role: 'minimize', label: 'Minimize', accelerator: 'CmdOrCtrl+M'}
        ]
    },
];

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            {role: 'preferences', label: 'Preferences', accelerator: 'Cmd+,'},
            {type: 'separator'},
            {role: 'quit', label: 'Quit', accelerator: 'Cmd+Q'}
        ]
    });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);