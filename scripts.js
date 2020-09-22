function changelogo(){
        document.getElementById('lg').src="logo2.png";
        }
function changelogoback(){
        document.getElementById('lg').src="logo.png";
        }
function checkfname(){
          var checkname = document.getElementById("fname").value;
            if ( /\d/.test(checkname) === true ){
             document.getElementById('fname').value="";
             document.getElementById("fname").placeholder = "Please enter a valid name";
            }

          var checkmail = document.getElementById("mail").value;
            if (/@/.test(checkmail) === false  ){
             document.getElementById('mail').value="";
             document.getElementById('mail').placeholder="Invalid Email";
                  }
            if (checkmail.endtext === false){
               document.getElementById('mail').value="";
            }

          }

var wfull = window.screen.width;
var h = window.innerHeight;
var w = window.innerWidth;
var min = w - 150;
var neww =  min.toString()+"px";
if (w < 537){
      document.getElementById('mobile').style.display = "block";
      document.getElementById('desktop').style.display = "none";
}
document.getElementById('img-container').style.width = neww;
function resize(){
         var w = window.innerWidth;
         var min = w - 100;
         var neww =  min.toString()+"px";
         document.getElementById('img-container').style.width = neww;
       }
function renav(){
          var w = window.innerWidth;
          if (w < 537){
          document.getElementById('mobile').style.display = "block";
          document.getElementById('desktop').style.display = "none";
  }else if(w > 537) {
          document.getElementById('mobile').style.display = "none";
          document.getElementById('desktop').style.display = "block";
    }
}
function switchNav(){
  nav = document.getElementById('mobilenav');
  if (nav.style.display === "block"){
    nav.style.display = "none";
  }else{
    nav.style.display = "block";
  }
}
window.addEventListener("resize",resize);
window.addEventListener("resize",renav);
document.getElementById("me").innerHTML=w;
document.getElementById("spotify-container").style.width=n;
