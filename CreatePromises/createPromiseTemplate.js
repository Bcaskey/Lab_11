var APromise = {};

APromise.resolve = function(value){
    // return Promise.resolve(value);
    return new Promise(function(resolve, reject) {
        resolve(value);
    })
};

APromise.reject = function(err){
    return new Promise(function(resolve, reject) {
        reject(err);
    })
};

// resolves when any one of the promises in the array parameter has resolved
APromise.race = function(promises){
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < promises.length; i++) {                
            Promise.resolve(promises[i]).then(resolve, reject);
        }
    });
};

// Resolves when all the promises given as a parameter have resolved.
APromise.all = function(promises){
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < APromise.length; i++) {                
        } resolve(value);
    });
};    
module.exports.APromise = APromise;


// var promiseCount = 0;
// function testPromise() {
//     var thisPromiseCount = ++promiseCount;
//     var log = document.getElementById('log');
//     log.insertAdjacentHTML('txt', thisPromiseCount + 'txt');
//     var p1 = new Promise(function(resolve, reject) {
//                     resolve(thisPromiseCount);
//         });
//     p1.then(function(val) {
//             log.insertAdjacentHTML('txt', val + 'txt');
//         })
//     .catch(function(reason) {
//             console.log('txt'+reason+'txt');
//         });
//     log.insertAdjacentHTML('txt', thisPromiseCount +  'txt');
// }