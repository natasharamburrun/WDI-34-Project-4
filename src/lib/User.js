class User {

  static setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  static clearCurrentUser(){
    localStorage.setItem('user', null);
  }
}

export default User;
