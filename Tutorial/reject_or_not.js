
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    var error = new Error ('I DID NOT FIRE');
    // var fulfill = new Fulfill = ('I FIRED')
    reject(error);

});

function onReject (e) {
    console.log(e.message);
};
promise.then(console.log, onReject);
