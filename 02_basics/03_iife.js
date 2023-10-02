
// it is used to invoke a function immediately
(function chai()
{
    // named IIFE immediately invoked function expression
    console.log('DB Connected');
})(); // <-- () is used to invoke

((name) =>{
    console.log(`DB COnnected two ${name}`);
})('shubham')