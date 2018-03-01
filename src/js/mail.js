const imaps = require('imap-simple');


getSubjects = (config) => {
    imaps.connect(config).then((connection) => {
        return connection.openBox('INBOX').then(() => {
            let searchCriteria = [
                'ALL'
            ];

            let fetchOptions = {
                bodies: ['HEADER'],
                markSeen: false
            };

            connection.search(searchCriteria, fetchOptions).then((results) => {
                global.subjects = results.map((res) => {
                    return res.parts.filter((part) => {
                        return part.which === 'HEADER';
                    })[0].body.subject[0];
                });
            });
        });
    });
};

getBodies = (config) => {
    imaps.connect(config).then((connection) => {
        return connection.openBox('INBOX').then(() => {
            let searchCriteria = [
                'ALL'
            ];

            let fetchOptions = {
                bodies: ['TEXT'],
                markSeen: false
            };

            connection.search(searchCriteria, fetchOptions).then((results) => {
                global.bodies = results.map((res) => {
                    return res.parts.filter((part) => {
                        return part.which === 'TEXT';
                    })[0].body;
                });
            });
        });
    });
};

module.exports = {
    getSubjects: (config) => getSubjects(config),
    getBodies: (config) => getBodies(config)
};