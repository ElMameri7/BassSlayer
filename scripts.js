function changelogo(){
        document.getElementById('lg').src="logo2.png";
        }
function changelogoback(){
        document.getElementById('lg').src="logo.png";
        }
function checkfname(){
          var checkname = document.getElementById("fname").value;
            if ( /\d/.test(checkname) == true ){
             document.getElementById('fname').value="";
             document.getElementById("fname").placeholder = "Please enter a valid name";
            }

          var checkmail = document.getElementById("mail").value;
            if (/@/.test(checkmail) == false  ){
             document.getElementById('mail').value="";
             document.getElementById('mail').placeholder="Invalid Email";
                  }
            if (checkmail.endtext == false){
               document.getElementById('mail').value="";
            }

          }
         var h = window.screen.height;
         var w = window.screen.width;
         var spotcon = h * 50 / 100 ;
         var n = spotcon.toString()+ "px";
         document.getElementById("spotify-container").style.height=n;
         document.getElementById("me").innerHTML=n;
