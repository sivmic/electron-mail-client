const fs = require('fs');

const textPattern = {
    "Account": {
        "Mail": "",
        "Password": "",
        "Server": "",
        "Port": 993,
        "TLS": true,
    }
};

writeToFile = (data = {}) => {
    let content = textPattern;
    content["Account"]["Mail"] = "Mail" in data ? data["Mail"] : "";
    content["Account"]["Password"] = "Password" in data ? data["Password"] : "";
    content["Account"]["Server"] = "Server" in data ? data["Server"] : "";
    content["Account"]["Port"] = "Port" in data ? data["Port"] : 993;
    content["Account"]["TLS"] = "TLS" in data ? data["TLS"] : true;
    fs.writeFile('account.json', JSON.stringify(content), (err) => {
        if (err) throw err;
    });
};

readFromFile = () => {
    let data = fs.readFileSync('account.json');
    return JSON.parse(data);
};

checkFile = () => {
    if (!fs.existsSync("account.json")) {
        writeToFile();
        return false;
    }
    return true;
};

let file = checkFile() ? readFromFile() : textPattern;

// Set importable functions/variables
module.exports = {
    mail: file["Account"]["Mail"],
    password: file["Account"]["Password"],
    server: file["Account"]["Server"],
    port: file["Account"]["Port"],
    tls: file["Account"]["TLS"],
    writeToFile: (data) => {
        writeToFile(data)
    }
};