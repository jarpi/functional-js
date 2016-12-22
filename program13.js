    function repeat(operation, num) {
      // Modify this so it doesn't cause a stack overflow!
      if (num <= 0) return 0;
      operation()
      return repeat.bind(null, operation, --num)
    }

    function trampoline(fn) {
      // You probably want to implement a trampoline!
      console.dir(fn);
      while (fn && fn instanceof Function) return fn();
      return fn;
    }

    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
      return trampoline(repeat.bind(null, operation, num));
    }
