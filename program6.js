function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
	return process(arr, fn, initial, 0);
	}

function process (arr, fn, acc, idx) { 
	return idx === arr.length ? acc : process(arr, fn, fn(acc, arr[idx], idx, arr), idx+1); 
}
module.exports = reduce
