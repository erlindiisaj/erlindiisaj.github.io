<?php 
 if (isset($_POST["submit"])) {
     $name = $_POST["name"];
     $mailFrom = $_POST["email"];
     $message = $_POST["message"];

     $mailTo = "erlind.isaj@outlook.com";
     $headers = "From: ".$mailFrom;
     $txt = "You have recieved an email from: ".$name.".\n\n".$message;


     mail($mailTo, $txt, $headers);
     header("Loaction: index.php?mailsend");
     
     
 }