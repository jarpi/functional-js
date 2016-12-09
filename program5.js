    function countWords(inputWords) {
      // SOLUTION GOES HERE
	return inputWords.reduce(function(p, c) { if (p[c] !== undefined || p[c] === 0){  p[c] = p[c]+1} else{ p[c] = 1;} return p;}, {});
    }

    module.exports = countWords
