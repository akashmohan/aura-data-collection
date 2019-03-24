var provider = new firebase.auth.GithubAuthProvider();

function openGithubPopUp() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    alert('Some Error Occured');
  });  
}