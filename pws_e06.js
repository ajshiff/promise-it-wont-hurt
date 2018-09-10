var prom = Promise.resolve('Start Promise Chain');
// Runs then, but not catch
// prom.then(console.log).catch( (value) => {
//     console.log( value );
//     console.log('error');
// });

// Runs both then and catch, but it appears to run catch first
// because it is trying to receive the value of console.log('error') to become the input parameter of .catch().
// It will be quiet if the new input parameter is invalid, unless .catch() is run in which case it will throw an error.
// prom.then(console.log).then(console.log).catch(console.log('error'));
// prom.then(() => new Promise((res,rej) => rej('there was a problem'))).then(console.log).catch(console.log('This is an example error')).catch(console.log);

// Runs then, but not catch
// prom.then(console.log).catch(console.log.bind(null, 'error'));

// Runs then, but not catch
// prom.then(console.log).catch((err) => console.log(err));

// 
prom.then(() => new Promise((res,rej) => rej('Banana'))).then(console.log).catch(function(value){throw 'error 2.0';}).catch(console.log);