<?php 

if ($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = htmlspecialchars ($_POST ['name']);
    $email = htmlspecialchars ($_POST ['email']);
    $feedback = htmlspecialchars ($_POST ['feedback']);


    echo "Obrigado pelo seu feedback, $name!";
}

?>