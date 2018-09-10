// var first  = (secretValue) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 250, secretValue);
//     });
// };
// var second = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout (resolve, 250, value);
//     });
// };

first().then(second).then(console.log);