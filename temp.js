var arrProm = [Promise.resolve('a'), Promise.resolve('b')];

Promise.all(arrProm).then(console.log);