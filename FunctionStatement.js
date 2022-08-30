var hoisted = "hello" in this;
console.log(`'hello' name ${hoisted ? "is" : "is not"} hoisted. typeof hello is ${typeof hello}`);
if (true) {
    function hello(){ return 1; }
}