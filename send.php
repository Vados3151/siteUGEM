<?php

if($_SERVER["REQUEST_METHOD"] !== "POST"){
    header("Location: /");
    exit;
}

$name    = strip_tags($_POST['name']);
$email   = strip_tags($_POST['email']);
$phone   = strip_tags($_POST['phone']);
$product = strip_tags($_POST['product']);

$to = "shomaxov2018@gmail.com";

$subject = "Новая заявка с сайта";

$message = "
Имя: $name
Телефон: $phone
Email: $email
Продукция: $product
";

$headers  = "From: site@".$_SERVER['SERVER_NAME']."\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);

header("Location: /?success=1");
exit;
?>
