// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcoAstGpTTMd2Brhmn0pIF890CRT6RIo4",
    authDomain: "kwitter-2cf7c.firebaseapp.com",
    databaseURL: "https://kwitter-2cf7c-default-rtdb.firebaseio.com",
    projectId: "kwitter-2cf7c",
    storageBucket: "kwitter-2cf7c.appspot.com",
    messagingSenderId: "814647797408",
    appId: "1:814647797408:web:e98b4d2d09ca1b2c7c0bc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addroom(){
  room_name = document.getElementById("roomname").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "add room name"
  })
  localStorage.setItem("roomname",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";