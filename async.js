function f(callback) {
    callback()

}

f(() => console.log('this is a callback'))

console.log('hello world')




function f(callback) {
    callback()

}

f(() => console.log('this is a callback'))

console.log('hello world')



function calculateSquare(number, callback){
    setTimeout(() => {
if(){
    
}

        let result = number * number
        callback(result);
    }, 1000);

}






//f(()=>console.log('this is a callback'))
function f(callback) {
    callback()
}
let mFunc = function () {

    console.log('this is a callback')
}

f(mFunc)


console.log('hello world')

/*
276

You need to make it a function expression instead of function definition which doesn't need a name and makes it a valid JavaScript.

(() => {
  console.log('Ok');
})();

Is the equivalent of IIFE

(function() {
   console.log('Ok');
})();

*/

function f(callback) {
    callback()

}

m => console.log('this is a callback')

f(()=> console.log('this is a callback'))

console.log('hello world')