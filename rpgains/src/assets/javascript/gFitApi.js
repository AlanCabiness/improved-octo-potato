var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/fitness.activity.read';
function handleClientLoad() {
  // Load the API's client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load('client:auth2', initClient);
}
function initClient() {
  // Retrieve the discovery document for version 3 of Google Drive API.
  // In practice, your app can retrieve one or more discovery documents.
  var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest';
  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  gapi.client.init({
    'discoveryDocs': [discoveryUrl],
    'clientId': "395753503829-q2g5n5gdc8au3u7gm7a8q6ol32t09q16.apps.googleusercontent.com",
    'scope': SCOPE
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();
    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(updateSigninStatus);
    // Handle initial sign-in state. (Determine if user is already signed in.)
    var user = GoogleAuth.currentUser.get();
    setSigninStatus();
    // Call handleAuthClick function when user clicks on
    //      "Sign In/Authorize" button.
    $('#sign-in-or-out-button').click(function() {
      handleAuthClick();
    });
    $('#revoke-access-button').click(function() {
      revokeAccess();
    });
    $('#api-call').click(function() {
      apicall();
    });
  });
}
function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    // User is authorized and has clicked 'Sign out' button.
    GoogleAuth.signOut();
  } else {
    // User is not signed in. Start Google auth flow.
    GoogleAuth.signIn();
  }
}
function revokeAccess() {
  GoogleAuth.disconnect();
}
function setSigninStatus(isSignedIn) {
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    $('#sign-in-or-out-button').html('Sign out');
    $('#api-call').html('API Call');
    $('#revoke-access-button').css('display', 'inline-block');
    $('#auth-status').html('You are currently signed in and have granted ' +
      'access to this app.');
  } else {
    $('#sign-in-or-out-button').html('Sign In/Authorize');
    $('#revoke-access-button').css('display', 'none');
    $('#auth-status').html('You have not autahorized this app or you are ' +
      'signed out.');
  }
}
function updateSigninStatus(isSignedIn) {
  setSigninStatus();
}
function apicall() {
  var request = gapi.client.request({
    'method': 'POST',
    'path': 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
    'body': {
      "aggregateBy": [{
        "dataSourceId":
          "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
      }],
      "bucketByTime": {"durationMillis": 86400000},
      "startTimeMillis": Date.now() - 86400000,
      "endTimeMillis": Date.now()
    }
  });
  request.then(function(response) {
    deepParseObject(response);
    let newobj = getObject(response);
    document.getElementById("estimated-steps").innerHTML =
      "You have achieved approximately " +newobj+ " in the last 24 hours.";
  });
}
