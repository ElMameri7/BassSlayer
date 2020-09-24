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
var min = w - 100;
var neww =  min.toString()+"px";
var frm = document.getElementById('ifrm');
var frm2 = document.getElementById('ifrm2');
var spotmobile = document.getElementById('spotify-container-mobile');
if (w < 537){
      document.getElementById('mobile').style.display = "block";
      document.getElementById('desktop').style.display = "none";
}
if (w < 1075){
      document.getElementById('spotify-container-mobile').style.display = "block";
      document.getElementById('spotify-container-desktop').style.display = "none";
}
if (w < 1075){
      var countWidth = w - 12 ;
      var newwidth = countWidth.toString() + "px"
      var countFrm = w - 84 ;
      var countSlider = w - 84;
      var newSlider = countSlider.toString() + "px";
      var newFrm = countFrm.toString() + "px";
      frm.style.width = newFrm;
      frm.style.height = "250px";
      frm2.style.width = newFrm;
      frm2.style.height = "250px";
      document.getElementById('slider').style.width=newSlider;
      spotmobile.style.width=newwidth;
      spotmobile.style.height="350px";
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
          if(w < 1075){
              document.getElementById('spotify-container-mobile').style.display = "block";
              document.getElementById('spotify-container-desktop').style.display = "none";
          }else if(w > 1075){
              document.getElementById('spotify-container-mobile').style.display = "none";
              document.getElementById('spotify-container-desktop').style.display = "flex";
          }
          if (w < 1075){
              var countWidth = w - 12 ;
              var newwidth = countWidth.toString() + "px"
              var countFrm = w - 84 ;
              var countSlider = w - 84;
              var newSlider = countSlider.toString() + "px";
              var newFrm = countFrm.toString() + "px";
              frm.style.width = newFrm;
              frm.style.height = "250px";
              frm2.style.width = newFrm;
              frm2.style.height = "250px";
              document.getElementById('slider').style.width=newSlider;
              spotmobile.style.width=newwidth;
              spotmobile.style.height="350px";

          }

}
function switchNav(){
  var nav = document.getElementById('mobilenav');
  if (nav.style.display === "flex"){
    nav.style.display = "none";
  }else{
    nav.style.display = "flex";
  }
}
function plusSlides() {
    var spot1 =  document.getElementById('spotify');
    var spot2 =  document.getElementById('spotify2');
    if (spot1.style.display === "block"){
      spot1.style.display = "none";
      spot2.style.display = "block";
    }else{
      spot1.style.display = "block";
      spot2.style.display = "none";
    }
}
function minSlides(){
  var spot1 =  document.getElementById('spotify');
  var spot2 =  document.getElementById('spotify2');
  if (spot2.style.display === "block"){
    spot1.style.display = "block";
    spot2.style.display = "none";
  }else{
    spot1.style.display = "none";
    spot2.style.display = "block";
  }

}
window.addEventListener("resize",resize);
window.addEventListener("resize",renav);
document.getElementById("me").innerHTML=w;
document.getElementById("spotify-container").style.width=n;
