var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ')sample inner HTML');

    var promise = new Promise(function(resolve, reject) {   // We make a new promise: we promise the string 'result' 
         log.insertAdjacentHTML('beforeend', thisPromiseCount + ' more innerHTML');  //(after waiting 3s) The resolver function is called with
                                                             
                                                                                     // the ability to resolve or reject the promise
        
            
            window.setTimeout(   // This is only an example to create asynchronism
                function() {    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        });
    promise.then(        // We define what to do when the promise is resolved/fulfilled with the then() call,
                   // and the catch() method defines what to do if the promise is rejected. 
        function(val) {            // Log the fulfillment value
            log.insertAdjacentHTML('beforeend', val +
                ') mroe innerHTML');
        })
    .catch(
        // Log the rejection reason
        function(reason) {
            console.log('text string ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ')more innerHTML');
}

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
    fulfill('FULFILLED!');
}, 300);

});

function onReject (error) {
    console.log('REJECTED!');
}

// Your solution here
