const fs = require('fs');


// Set importable functions/variables
module.exports = {
    writeToFile: (data) => {
        fs.writeFile('account.txt', data, (err) => {
            if (err) throw err;
        });
    },
    readFromFile: () => {
        let data = fs.readFileSync('account.json');
        return JSON.parse(data);
    }
};