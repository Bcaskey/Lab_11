// var promise = new Promise(function(resolve, reject) {
//     var attachTitle = function() {
//         title = 'DR.';
//     }
// });
    

// promise.then(function(result) {
//     console.log('The result is: ' + result);
// }, function(err) {
//     console.log(title + err);
// });

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);