function promiseMe () {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 300, new Error('REJECTED!'));
    });
}

function onReject (error) {
    console.log(error.message);
}

promiseMe().then(console.log, onReject);