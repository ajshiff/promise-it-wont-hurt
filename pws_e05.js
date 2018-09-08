function youPromise() {
    return new Promise((resolve, reject) => {
        resolve('PROMISE VALUE');
    });
}

youPromise().then(console.log);

console.log('MAIN PROGRAM');