const firebaseConfig = {
    apiKey: "AIzaSyBLL6FmzvAdqzkSiGltmww0MVnU4QRZtcc",
    authDomain: "chat-d4efe.firebaseapp.com",
    databaseURL: "https://chat-d4efe-default-rtdb.firebaseio.com",
    projectId: "chat-d4efe",
    storageBucket: "chat-d4efe.appspot.com",
    messagingSenderId: "412695258671",
    appId: "1:412695258671:web:9fb826211ea1ce872748da",
    measurementId: "G-PHYCM6N13C"
  };
firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
