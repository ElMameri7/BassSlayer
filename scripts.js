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
var frm = document.getElementById('ifrm');
var frm2 = document.getElementById('ifrm2');
var spotmobile = document.getElementById('spotify-container-mobile');
var img1Slides = document.getElementById('img1');
if (w > 1303){
  document.getElementById('img-container-child').style.width = "100%";
  document.getElementById('img-container-parent').style.width = "93.5%";
}
if (w < 1303){
  document.getElementById('img-container-child').style.width = "900px";
  document.getElementById('img-container-parent').style.width = "900px";
}
if (w < 919){
  document.getElementById('img-container-child').style.width = "600px";
  document.getElementById('img-container-parent').style.width = "600px";
}
if (w < 620){
  document.getElementById('img-container-child').style.width = "300px";
  document.getElementById('img-container-parent').style.width = "300px";
}
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
function resize(){
         var w = window.innerWidth;
         if (w > 1303){
           document.getElementById('img-container-child').style.width = "100%";
           document.getElementById('img-container-parent').style.width = "93.5%";
           img1Slides.style.marginLeft = "0%"
         }
         if (w < 1303){
           document.getElementById('img-container-child').style.width = "900px";
           document.getElementById('img-container-parent').style.width = "900px";
           img1Slides.style.marginLeft = "0%"
         }
         if (w < 919){
           document.getElementById('img-container-child').style.width = "600px";
           document.getElementById('img-container-parent').style.width = "600px";
           img1Slides.style.marginLeft = "0%"
         }
         if (w < 620){
           document.getElementById('img-container-child').style.width = "300px";
           document.getElementById('img-container-parent').style.width = "300px";
           img1Slides.style.marginLeft = "0%"
         }
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
  if (nav.style.top === "120px"){
    nav.style.top = "80px";
  }else{
    nav.style.top = "120px";
  }
}
function next(){
       var  w = window.innerWidth;
       if(w < 620 ){
          if (img1Slides.style.marginLeft === "0%"){
                  img1Slides.style.marginLeft = "-100%";
          }else if (img1Slides.style.marginLeft === "-100%"){
                  img1Slides.style.marginLeft = "-200%";
          }else if (img1Slides.style.marginLeft === "-200%"){
                  img1Slides.style.marginLeft = "-300%";
          }else{
                  img1Slides.style.marginLeft = "0%";
          }
      }else if (w < 919) {
          if (img1Slides.style.marginLeft === "0%"){
                img1Slides.style.marginLeft = "-50%";
          }else if (img1Slides.style.marginLeft === "-50%"){
                  img1Slides.style.marginLeft = "-100%";
          }else{
                  img1Slides.style.marginLeft = "0%";
          }

      }else if (w < 1303) {
          if (img1Slides.style.marginLeft === "0%"){
              img1Slides.style.marginLeft = "-34%";
          }else{
                  img1Slides.style.marginLeft = "0%";
          }
      }
}
function prev(){
        var  w = window.innerWidth;
        if(w < 620 ){
          if (img1Slides.style.marginLeft === "-300%"){
              img1Slides.style.marginLeft = "-200%";
            }else if (img1Slides.style.marginLeft === "-200%"){
             img1Slides.style.marginLeft = "-100%";
           }else if (img1Slides.style.marginLeft === "-100%"){
             img1Slides.style.marginLeft = "-0%";
            }else{
             img1Slides.style.marginLeft = "-300%";
           }
         }else if (w < 919) {
           if (img1Slides.style.marginLeft === "-100%"){
           img1Slides.style.marginLeft = "-50%";
         }else if (img1Slides.style.marginLeft === "-50%"){
             img1Slides.style.marginLeft = "-0%";
           }else{
             img1Slides.style.marginLeft = "-100%";
           }

         }else if (w < 1303) {
           if (img1Slides.style.marginLeft === "-34%"){
             img1Slides.style.marginLeft = "0%";
           }else{
             img1Slides.style.marginLeft = "-34%";
      }
    }

}
function plusSlides() {
    var spot1 =  document.getElementById('spotify');
    var spot2 =  document.getElementById('spotify2');
    if (spot1.style.display === "none"){
      spot1.style.display = "block";
      spot2.style.display = "none";
    }else{
      spot1.style.display = "none";
      spot2.style.display = "block";
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
