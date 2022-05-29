//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw", authDomain: "jsdbtest.firebaseapp.com", databaseURL: "https://jsdbtest.firebaseio.com", projectId: "jsdbtest", storageBucket: "jsdbtest.appspot.com", messagingSenderId: "557097620929", appId: "1:557097620929:web:d549209de61a48b20b8b40" };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4> "+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+ " onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button> <hr>";
row=name_with_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }



getData();
function updatelike(message_id){
      button_id_message_id;
      like=document.getElementById("button_id").value;
      updated_likes=Number(like)+1;
      firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}