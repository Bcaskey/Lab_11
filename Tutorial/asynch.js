
var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
})
promise.then(function(e) {
    console.log('MAIN PROGRAM');
    console.log(e);
});


    
