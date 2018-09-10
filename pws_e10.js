const alwaysThrow = () => {
    throw 'OH NOES';
};

const iterate = (int) => {
    if (int === undefined) {int = 1;}
    console.log(int);
    return ++int;
};

const makePro = (fn) => {
    return new Promise((resolve, reject) => {
        resolve(fn());
    });
};

makePro  (iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrow)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);