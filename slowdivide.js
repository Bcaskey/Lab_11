function slowDivide(num1, num2) {
    var p = new Promise(function(resolve, reject) {
        if (num2 === 0) {
            reject('You cannot divide by zero!');
        } else {
            var result = num1 / num2;
            resolve(result);
        }
    });
    return p;
}

slowDivide(4,0).then(function(result) {
    console.log('The result is: ' + result);
}, function(err) {
    console.log('An error occurred. ' + err);
});