// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();

// Unnamed IIFE
((name) => {
    console.log(`DB connected to ${name}`)
})("Santosh");