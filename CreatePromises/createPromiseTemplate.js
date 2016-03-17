var APromise = {};

APromise.resolve = function(value){};

APromise.reject = function(err){};

APromise.race = function(promises){};

APromise.all = function(promises){};

var promise = APromise.resolve();

var promise = APromise(function (resolve, reject) {  
        resolve(value);
});
promise.then(function(success) {
    console.log(value);
}, 
function(err) {
    console.log(err);
});


module.exports.APromise = APromise;


// describe('resolve', function(){
// 		it('should return a promise', function(done){
// 			var promise = APromise.resolve();
// 			expect(promise).to.have.property('then');
// 			done();
// 		});
// 		describe('response', function(){
// 			var reason;
// 			afterEach(function(){
// 				expect(reason).to.be("Testing");
//             });

// 			it('should return value', function(done){
// 				Promise.resolve("Testing").then(function(res) {
// 						reason = res
// 					}, function(err) {
// 					  reason = err;
// 					});
// 				done();
// 			});
// 		});
// 	});