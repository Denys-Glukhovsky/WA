<?php

$ToEmail = 'job.sn@zoho.com'; 
$EmailSubject = '- Анкета-кандидата - '; 
$mailheader = "From: ". "admin@s-n.in.ua"."\r\n";
$mailheader = "Content-type: text/html; charset=\"utf-8\"";
//$MESSAGE_BODY = "Имя: " . $_POST["name"] . "\r\n"; 
$MESSAGE_BODY = 
  "Имя : ". $_POST["name"] ."\r\n<p>" .
  "Телефон : " . $_POST["phone"] ."\r\n<p>" .
  "Почта : " . $_POST["email"] ."\r\n<p>" .
  "Возраст : ". $_POST["age"] ."\r\n<p>" .
  "Пол : ". $_POST["gender"] ."\r\n<p>" .
  "Комментарии : ". $_POST["comment"] ."\r\n<p>";
  
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader);


 
//$thankYou = 'https://projects.s-n.in.ua/anketa_vidpravlena.html';
header("Location: https://projects.s-n.in.ua/html/thank_you.html");
exit();
?>






