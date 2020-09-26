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
var w = window.innerWidth;
if (w < 537){
      document.getElementById('mobile').style.display = "block";
      document.getElementById('desktop').style.display = "none";
}
function renav(){
          var w = window.innerWidth;
          var mobnav = document.getElementById('mobile');
          var desknav = document.getElementById('desktop');
          if (w < 537){
               mobnav.style.display = "block";
               desknav.style.display = "none";
          }
          else if(w > 537) {
              mobnav.style.display = "none";
              desknav.style.display = "block";
          }

}
function switchNav(){
  var nav = document.getElementById('mobilenav');
  if (nav.style.top === "120px"){
    nav.style.top = "80px";
  }else{
    nav.style.top = "120px";
  }
}

window.addEventListener("resize",renav);
