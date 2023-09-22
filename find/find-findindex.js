function findUserByUsername(usersArray, username) {
  return usersArray.find(function(str){
    return str.username === username;
  })
}

function removeUser(usersArray, username) {
    let rmUser;
    rmUser = usersArray.findIndex(function(str){
      return str.username === username;
    })
    if(rmUser !== -1)
      return usersArray.splice(rmUser, 1)[0];
    
      return;
}