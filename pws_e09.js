const invalidJSON = process.argv[2];

const parsedPromise = (json) => {
    return new Promise( (resolve, reject) => {
        try {
            resolve( JSON.parse(json) );
        } catch (err) {
            reject(err);
        }
    } );
};

parsedPromise(invalidJSON).then(console.log).catch(console.log);