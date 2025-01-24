// Immediately Invoked Function Expression (IIFE)
// to avoid the global variable pollution we use iife
(function chai(){
    // names IIFE
    console.log("DB CONNECTED");
    
})();

(   (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('ruchi')



 