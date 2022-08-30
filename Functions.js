var x = 10;

function exampleFunction(){
    var x = 20;
    return new Function('return x;');
}

function exampleFunction2(){
    var x = 20;
    function f(){
        return x;
    }
    return f;
}

var f1 = exampleFunction
console.log(f1());
var f2 = exampleFunction2
console.log(f2());