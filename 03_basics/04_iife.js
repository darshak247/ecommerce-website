// Immediately Involed function expressions (IIFE)

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);

})();

// unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})('hitesh')