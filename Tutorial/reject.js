
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function(error) {
    var error = new Error ('REJECTED!');
    reject(error);
}, 300);

});

function onReject (e) {
    console.log(e.message);
};
promise.then(null, onReject);