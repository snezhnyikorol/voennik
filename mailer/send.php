<?php

$message = 'Данные: '."\r\n";

$email = "raketskij@gmail.com";

function formatstr($str) 
{ 
$str = trim($str); 
$str = stripslashes($str); 
$str = htmlspecialchars($str); 
return $str; 
} 



$name = formatstr($_POST['name']);
$phone = formatstr($_POST['phone']);
$text = formatstr($_POST['text']);

$comment = "";



// $utm_source = formatstr($_POST['utm_source']);
// $utmMedium = formatstr($_POST['utm_medium']);
// $utmContent = formatstr($_POST['utm_content']);
// $utmCampaign = formatstr($_POST['utm_campaign']);

 
 $message .='Имя: '.$name."\r\n"."Телефон: ".$phone."\r\n"."Текст: ".$text."\r\n";

/* UTM */
// if (isset($_POST['utm_medium'])) {$utm_medium = $_POST['utm_medium'];}
// if (isset($_POST['utm_source'])) {$utm_source = $_POST['utm_source'];}
// if (isset($_POST['utm_campaign'])) {$utm_campaign = $_POST['utm_campaign'];}
// if (isset($_POST['utm_term'])) {$utm_term = $_POST['utm_term'];}
// if (isset($_POST['utm_content'])) {$utm_content = $_POST['utm_content'];}
// if (isset($_POST['position'])) {$position = $_POST['position'];}
// if (isset($_POST['keyword'])) {$keyword = $_POST['keyword'];}
// if (isset($_POST['request']['FORM_TYPE'])) {$action = $_POST['request']['FORM_TYPE'];}
// if (isset($_POST['model'])) {$model = $_POST['model'];}
// if (isset($_POST['traffic_source'])) {$traffic_source = $_POST['traffic_source'];}
// if (isset($_POST['source'])) {$source = $_POST['source'];}

// $utm_medium = stripslashes($utm_medium);
// $utm_medium = htmlspecialchars($utm_medium);
// $utm_source = stripslashes($utm_source);
// $utm_source = htmlspecialchars($utm_source);
// $utm_campaign = stripslashes($utm_campaign);
// $utm_campaign = htmlspecialchars($utm_campaign);
// $utm_term = stripslashes($utm_term);
// $utm_term = htmlspecialchars($utm_term);
// $utm_content = stripslashes($utm_content);
// $utm_content = htmlspecialchars($utm_content);
// $block = stripslashes($block);
// $block = htmlspecialchars($block);
// $keyword = stripslashes($keyword);
// $keyword = htmlspecialchars($keyword);
// $position = stripslashes($position);
// $position = htmlspecialchars($position);
// $action = stripslashes($action);
// $action = htmlspecialchars($action);
// $traffic_source = htmlspecialchars($traffic_source);
// $source = htmlspecialchars($source);


// $msg .= "Информация:\r\n";
// $msg .= "Форма: ".$form."\r\n";
// $msg .= "Тип билета: ".$biltype."\r\n";
// $msg .= "IP: ".$_SERVER["REMOTE_ADDR"]."\r\n";
// $msg .= "Канал трафика: ".$utm_source."\r\n";
// $msg .= "Тип трафика: ".$utm_medium."\r\n";
// $msg .= "Ключевое слово: ".$utm_term."\r\n";
// $msg .= "Контент: ".$utm_content."\r\n";
// $msg .= "Кампания: = ".$utm_campaign."\r\n";
// $msg .= "position (позиция) = ".$position."\r\n";
// $msg .= "source (ресурс) = ".$source."\r\n";

 
 mail ($email, "Заявка Военник ", $message);

?>