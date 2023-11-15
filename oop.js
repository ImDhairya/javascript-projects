const user = {
  username: "hitesh",
  loginCount : 8,
  signedIn: true,

  getUserDetails: function() {
    console.log(`Username: ${this.username}`);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails())

const user2 = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    console.log(this);
  }
}