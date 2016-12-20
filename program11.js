    function Spy(target, method) {
        // SOLUTION GOES HERE
        var obj = {count:0}
        var old_fn = target[method];
        target[method] = function() {
            obj.count += 1;
            return old_fn.call(this, arguments);
        };
        return obj;
    }

    module.exports = Spy