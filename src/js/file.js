const fs = require('fs');

const textPattern = {
    "Account": {
        "Mail": "",
        "Password": ""
    }
};

writeToFile = (data = {}) => {
    let content = textPattern;
    content["Account"]["Mail"] = "Mail" in data ? data["Mail"] : "";
    content["Account"]["Password"] = "Password" in data ? data["Password"] : "";
    fs.writeFile('account.json', JSON.stringify(content), (err) => {
        if (err) throw err;
    });
};

readFromFile = () => {
    let data = fs.readFileSync('account.json');
    return JSON.parse(data);
};

let file = readFromFile();

// Set importable functions/variables
module.exports = {
    checkFile: () => {
        if (!fs.existsSync("account.json")) {
            writeToFile();
            return false;
        }
        return true;
    },
    mail: file["Account"]["Mail"],
    password: file["Account"]["Password"]
};