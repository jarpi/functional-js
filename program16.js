function curryN(fn, n) {
    n = (n || fn.length)-1;
    var args = [];
    var binder = function(x) {
        console.dir(arguments);
        var obj = arguments[0];
        var args = obj.args.slice(0);
        if (args.length < n) {
            args.push(arguments[1]);
            return binder.bind(null, {args:args})
        }
        return fn.apply(null,args.concat(arguments[1]));
    }
    return binder.bind(null, {args:args});
}

module.exports = curryN
