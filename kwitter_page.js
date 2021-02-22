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
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("roomname");
function send(){
      msg = document.getElementById("message").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").innerHTML = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) { 
      childKey = childSnapshot.key; childData = childSnapshot.val();
       if(childKey != "purpose") { 
             firebase_message_id = childKey; message_data = childData; 
      //Start code
       console.log(firebase_message_id);
       console.log(message_data); 
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'>"+"</h4>"
       message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
       like_button = "<button class='btn btn-warning id='"+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
       row = name_with_tag+message_with_tag+like_button+span_with_tag;
       document.getElementById("output").innerHTML += row;
       //End code 
} }); }); } getData();
function updateLike(message_id){
      console.log("click on like button-"+ message_id);
      button_id = firebase_message_id;
      likes = document.getElementById(button_id).value;
      updatedLike = Number(likes) + 1;
      console.log(updatedLike);
      firebase.database().ref(room_name).child(message_id).update({
            like:"updated Like"
      })
}