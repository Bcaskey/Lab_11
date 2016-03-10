
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
    fulfill('FULFILLED!');
}, 300);
}).then(function(success) {
    console.log(success);
}, function(err) {
    console.log(err);
});