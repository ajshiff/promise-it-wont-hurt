// My thought
var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'FULFILLED!');
});
promise1.then(console.log);

// Ben's Thought
function promise2 () {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'FULFILLED!');
    });
}
promise2().then(console.log);