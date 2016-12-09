
  function checkUsersValid(goodUsers) {	
	console.dir(goodUsers);
    return function allUsersValid(submittedUsers) {
	console.dir(submittedUsers);
      // SOLUTION GOES HERE
	return submittedUsers.every(function(e) { return goodUsers.some(function(f){ return e.id === f.id;});});
    };
  }

  module.exports = checkUsersValid
