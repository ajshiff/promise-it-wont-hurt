const fs = require('fs');

// Make-shift, self-made promise
function readDaFile() {
    var resolve;
    var reject;

    var promise = {
        then: fn => resolve = fn,
        catch: fn => reject = fn,
    };

    setTimeout(() => {
        console.log(resolve);
        console.log(reject);
        fs.readFile('file.txt', 'utf-8', (err, data) => {

            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    }, 0);

    return promise;
}
var promise = readDaFile();

// Stuff for 1
promise.then(file => console.log(file));
promise.catch(err => console.err('AGHHHHHHH!!!!!'));

// ES6 Promises
function fun2() {
    return new Promise((resolve, reject) => {
        fs.readFile('file.txt', 'utf-8', (err, data) => {
            resolve(data);
        });
    });
}
// stuff for 2
fun2().then(console.log);