   var slice = Array.prototype.slice;

   function logger(namespace) {
       // SOLUTION GOES HERE
       return function() {
           return console.log.apply(null, [namespace, slice.call(arguments).join(' ')]);
       }
   }

   module.exports = logger;
   