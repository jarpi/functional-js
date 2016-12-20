   var slice = Array.prototype.slice;

   function logger(namespace) {
       // SOLUTION GOES HERE
       return Function.prototype.bind.apply(console.log, [namespace, slice.call(arguments).join(' ')]);
   }

   module.exports = logger; 