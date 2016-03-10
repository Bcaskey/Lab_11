first()
.then(function(success) {
    return second(success);
})
.then(function(success) {
   console.log(success); 
});
