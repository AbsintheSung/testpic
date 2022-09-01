<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            background: linear-gradient(20deg,#3d5493,#1aa2a0) fixed center center / 100% 100%;
        }
    </style>
</head>
<body>
    
    <?php
    session_start();
    $userAccount = $_SESSION['Account'];
    echo "<h1>歡迎，".$userAccount."</h1>"; 
    ?>

</body>
</html>
