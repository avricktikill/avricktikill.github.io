<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if (!empty($name) && !empty($email) && !empty($message)) {  
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {  
            $subject = "Сообщение от $name";
            $body = "Имя: $name\nEmail: $email\nСообщение: $message";
            $headers = "From: $email";
            if (mail("prostocel88@gmail.com", $subject, $body, $headers)) {
                echo "Спасибо за ваше сообщение, $name. Мы свяжемся с вами по адресу $email.";
            } else {
                echo "Ошибка при отправке сообщения.";
            }
        } else {
            echo "Неверный формат email.";
        }
    } else {
        echo "Пожалуйста, заполните все поля формы.";
    }
} else {
    echo "Неправильный запрос.";
}
?>