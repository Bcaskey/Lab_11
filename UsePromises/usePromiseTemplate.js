function mapAsync(iterator, obj, context) {
    // return new Promise(function(resolve, reject) {
        var result = [];
        for (var i = 0; i < obj.length; i++) {
            result.push(iterator(obj[i]));
        }
        console.log('the end');
        console.log(result);
        return Promise.all(result).then(function (success) {
            console.log('hooray!');
            console.log(success);
            return success;
        }, function(err) {
            console.error(err);
            throw err;
        });
    // });
};
function mapAsyncInOrder(iterator, array, context) {
    return new Promise(function(resolve, reject) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(iterator(array[i]));
        }
        return result;
    });
};
function mapAsyncInDescendingOrder(iterator, array, context) {
    return new Promise(function(resolve, reject) {
        var result = [];
        for (var i = array.length - 1; i >= 0; i--) {
            result.push(iterator(array[i]));
        } 
        return result;
    });
};