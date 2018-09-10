var attachTitle = (arg1) => {
    return 'DR. '.concat(arg1);
};

var newProm = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'MANHATTAN');
}); 

newProm().then(attachTitle).then(console.log);