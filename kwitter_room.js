
var firebaseConfig = { apiKey: "AIzaSyDaCONVl7DnOLpYL6GBCROBGK1JVrjzuzM", authDomain: "social-website-6ec27.firebaseapp.com", databaseURL: "https://social-website-6ec27-default-rtdb.firebaseio.com", projectId: "social-website-6ec27", storageBucket: "social-website-6ec27.appspot.com", messagingSenderId: "720345163374", appId: "1:720345163374:web:7e0ae21e81e8b385c3687f", measurementId: "G-P7KCPNRMBY" };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addroom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class= 'room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)' >#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

