    function getDependencies(tree) {
        // SOLUTION GOES HERE
        // Note: Feel free to add additional arguments
        // to this function for use with recursive calls.
        // Or not! There are many ways to recurse.
        var deps = [];
        if (!tree || !tree.dependencies) return deps;
        Object.keys(tree.dependencies).forEach(function(e){
            var depsOfE = [];
           deps.push(e + '@' + tree.dependencies[e].version);
           if (tree.dependencies[e].dependencies) depsOfE = getDependencies(tree.dependencies[e]);
           depsOfE.forEach(function(t){
                if (deps.indexOf(t) === -1) deps.push(t);
           });
        });
        return deps.sort();
    }

    module.exports = getDependencies;