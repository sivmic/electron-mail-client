const electronPrompt = require('electron-prompt');


module.exports = {
    loginPrompt: (window) => {
        electronPrompt({
            title: 'Login',
            label: 'Name',
            value: 'http://example.org',
            inputAttrs: { // attrs to be set if using 'input'
                type: 'url'
            }
        }, window).then((r) => {
            console.log('result', r); // null if window was closed, or user clicked Cancel
        }).catch(console.error);
    }
};