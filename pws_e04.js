function iPromise() {
    return new Promise((resolve, reject) => {
        resolve('I FIRED');
        reject(new Error('I DID NOT FIRE'));
    });
}

function onReject(error) {
    console.log(error.message);
}

iPromise().then(console.log, onReject);