<?php

  if ($_SERVER["REQUEST_METHOD"]=== "POST"){
     $name = $_POST["full_name"];
     $mail = $_POST["e_mail"];
     $txt = $_POST["text"];
     $vid_link = $_POST["video_link"];
    $to = "aztik77@gmail.com";
    $subject = "Submiting a Video";
    $t = "Name: ${name}\n";
    $head = "From {$mail}\n{$txt} here is the video link hope u like it\n{$vid_link}";
    mail($to , $subject , $t , $head);
   if (mail($to , $subject ,$t ,$head)){
    echo "<h1>Success!!</h1>";
  }else{
    echo "<H1>Something went wrong :(</H1>";
  }
}

?>
