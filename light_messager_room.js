
//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCxgSo8p3KlunpOG81FFaAVFGj8Jw6pWFw",
      authDomain: "kwitter-practice-test.firebaseapp.com",
      databaseURL: "https://kwitter-practice-test-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-test",
      storageBucket: "kwitter-practice-test.appspot.com",
      messagingSenderId: "1062246051538",
      appId: "1:1062246051538:web:54bcbb67f8ade55376070b",
      measurementId: "G-1D9LVJKHQB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
