var prom = Promise.resolve('Start Promise Chain');
prom.then(console.log).then(console.l).catch(console.log);