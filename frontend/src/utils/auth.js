import firebaseapp from 'firebase';

const config = {
  apiKey: "AIzaSyCPl1TboIUPkhPzUi2jUNUYCMoMfvRYpvI",
  authDomain: "drinksonus-8ab97.firebaseapp.com",
  databaseURL: "https://drinksonus-8ab97.firebaseio.com",
  storageBucket: "drinksonus-8ab97.appspot.com",
};

firebase.initializeApp(config)
const createUser = {
SignUp: function(email, pass,username) {
    const auth = firebaseapp.auth();
    auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
    console.log("USERRESPONSE", userResponse);
  }).catch(function(error){
    console.log('test',error);
  }).then((response) => {
    console.log("CurrentUser",firebase.auth().currentUser);
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.updateProfile({
        displayName: username
      }).then(function() {
          console.log('SignUp Successful');
        }, function(error) {
          console.log("An error occured on Update");
        });
    }
  })
  },

sendEmailVerification: function() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    },


SignIn: function(email, password) {
    let response = firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
      var user = firebase.auth().currentUser;
            if (user) {
              console.log(user.displayName," Signed in");
            } else {
              console.log("No user Signed in");
            }
     console.log("hallo", response)
      return response
  })
  return response;
  },

  Update: function(username){
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.updateProfile({
        displayName: username
      }).then(function() {
          console.log('Update Successful');
        }, function(error) {
          console.log("An error occured on Update");
        });
    }
  },
SignOut: function() {
    let response = firebase.auth().signOut().then((res)=> {
  console.log("Peace out IV");
}, function(error) {
  console.log(error);
});
  }

}
export default createUser;
