function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], function(err, val) {
            users.push(val);
            if(users.length === userIds.length) done(null, users);
        });
    }
}

module.exports = loadUsers