// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log('this is paradox')
})(),

( (name) =>{
    console.log(`this is slogun ${name}`)
})('jai hind');


(function par() {
    console.log("this is my move")
})();


 ( (name)=>{
    console.log(`this is my ${name}`)
 })("rohit")