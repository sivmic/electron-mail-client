const imaps = require('imap-simple');


getSubjects = (config) => {
    imaps.connect(config).then((connection) => {
        return connection.openBox('INBOX').then(() => {
            let searchCriteria = [
                'UNSEEN'
            ];

            let fetchOptions = {
                bodies: ['HEADER', 'TEXT'],
                markSeen: false
            };

            return connection.search(searchCriteria, fetchOptions).then((results) => {
                let subjects = results.map((res) => {
                    return res.parts.filter((part) => {
                        return part.which === 'HEADER';
                    })[0].body.subject[0];
                });

                console.log(subjects);
            });
        });
    });
}

module.exports = {
    getSubjects: (config) => {
        getSubjects(config)
    }
};