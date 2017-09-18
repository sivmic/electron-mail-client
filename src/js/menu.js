const {app, Menu} = require('electron');

const template = [
    {
        label: 'Edit',
        submenu: [
            {role: 'undo', accelerator: 'CmdOrCtrl+Z'},
            {role: 'redo', accelerator: 'Shift+CmdOrCtrl+Z'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload', accelerator: 'CmdOrCtrl+R'},
            {role: 'toggledevtools', accelerator: 'Alt+CmdOrCtrl+I'}
        ]
    },
    {
        role: 'window',
        submenu: [
            {role: 'close', accelerator: 'CmdOrCtrl+W'},
            {role: 'minimize', accelerator: 'CmdOrCtrl+M'}
        ]
    },
];

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            {role: 'quit', accelerator: 'Cmd+Q'}
        ]
    });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);