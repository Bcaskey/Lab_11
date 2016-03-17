document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('add-button').addEventListener('click', add); // add is a pram.for a function. No Parens needed.
    document.getElementById('subtract-button').addEventListener('click', subtract);
    document.getElementById('multiply-button').addEventListener('click', multiply);
    document.getElementById('divide-button').addEventListener('click', divide);
});




function add(op1, op2) {
    console.log('adding');
    //return op1 + op2;
}

function subtract(op1, op2) {
    console.log('subtract');
    //return op1 - op2;
}

function multiply(op1, op2) {
    console.log('multiply');
    //return op1 * op2;
}

function divide(op1, op2) {
    console.log('divide');
    //return op1 / op2;
}

function divide() {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;


// resolve reject are just words.
var romise = new Promise(function(resolve, reject) {//This is the executor. In a state of pending
// Login in here can take as long as needed.
// eventually, we resolve or reject. We resolve or reject it.
    if (op2 === 0) {
            reject('You cannot divide by zero!');
        } else {
            var result = op1 / op2;
            resolve(answer);
        }
        
        // setTimeOut code here----
        
    }).then(function(successPizza) {// tis is a resolve start
        console.log('The result is: ' + result); //it is just common practice success first
        console.log(sucessPizza);// tis works because the key word success/pizza above, 
                                 //automatically gets resolve
    }, function(err) {
        console.log('An error occurred. ' + err); //err works same way. pizza/err gets reject value
    });
}//Asynch nature. these can run more multiple times on multiple clicks.
// NOTE: if we left off then statement, we would wait. But nothing would happen.

//In the future most promises will be setup by server
// we will be writing the then statements. Calling their promises.

//ex.  //this starts a promise, a library
dictionaryLibrary.getWordOfTheDay().then(function(wordPizza) {//again word is auto variable
    console.log('The word of the day' + wordPizza);            //then takes one pram
}, function(errPizza) {
    console.log('An error occurred.');
    console.log(errPizza);
}) 

dicetionaryLibrary.getWordOfTheDay().then(console.log);// this would work. But would just get the word.

//ex.

// .catch is for chaining. You do the success resolve, then chain error. catch error, 
// give message. // erro or success message are defined in the promise.
// myLib example would have a bunch of if statements in the promse.


//chaining isn't really asynch. that is how you wait. 