module.exports = function arrayMap(arr, fn) {
        // SOLUTION GOES HERE
        if (!arr || !fn) return null;
        return arr.reduce(function(p, c){
        	var x = p.slice();
        	x.push(fn(c));
        	return x;
        }, []);
    }
