const {app, Menu} = require('electron');

const template = [
    {
        // Under 'Edit' label add 'undo' and 'redo' roles + add shortcuts to them
        label: 'Edit',
        submenu: [
            {role: 'undo', label: 'Undo', accelerator: 'CmdOrCtrl+Z'},
            {role: 'redo', label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z'}
        ]
    },
    {
        // Under 'View' label add 'reload' and 'toggledevtools' roles + add shortcuts to them
        label: 'View',
        submenu: [
            {role: 'reload', label: 'Reload', accelerator: 'CmdOrCtrl+R'},
            {role: 'toggledevtools', label: 'Toggle DevTools', accelerator: 'Alt+CmdOrCtrl+I'}
        ]
    },
    {
        // Under 'Window' label add 'close' and 'hide' roles + add shortcuts to them
        role: 'window',
        submenu: [
            {role: 'close', label: 'Close', accelerator: 'CmdOrCtrl+W'},
            {role: 'hide', label: 'Hide', accelerator: 'CmdOrCtrl+H'}
        ]
    },
];

// On macOS, we have to add some another settings
if (process.platform === 'darwin') {
    template.unshift({
        // Set name in upper-bar on macOS
        label: app.getName(),
        submenu: [
            {role: 'preferences', label: 'Preferences', accelerator: 'Cmd+,'}, // Preferences == settings on macOS
            {type: 'separator'}, // Blank line, added for good looks
            {role: 'quit', label: 'Quit', accelerator: 'Cmd+Q'} // Quit role + its shortcut
        ]
    });
}

// Set importable functions/variables
module.exports = {
    // Set menu in our app
    setMenu: () => {
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
};