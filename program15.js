    function getDependencies(tree) {
        // SOLUTION GOES HERE
        // Note: Feel free to add additional arguments
        // to this function for use with recursive calls.
        // Or not! There are many ways to recurse.
        console.dir(tree);
        if (!tree.dependencies) return '';
        return Object.keys(tree.dependencies).reduce(function(p, e){
        	return p + tree.dependencies[e] + '@' + tree.dependencies[e]['version'] + getDependencies(tree.dependencies[e]);
        },'');
    }

    module.exports = getDependencies 


 var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

console.dir(getDependencies(loremIpsum));