
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0u44DvEaCNcnNTF3JMdOPal-pk8vm5hQ",
  authDomain: "kwitter-914c7.firebaseapp.com",
  databaseURL: "https://kwitter-914c7-default-rtdb.firebaseio.com",
  projectId: "kwitter-914c7",
  storageBucket: "kwitter-914c7.appspot.com",
  messagingSenderId: "780520726518",
  appId: "1:780520726518:web:5d7c5c74efa070da3b31d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
      

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}