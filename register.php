<?php
include './connectMysql.php';

$userAccount = $_POST['Account'];
$userPassword = $_POST['Password'];
$sql_read="SELECT * FROM account_php WHERE Account = '$userAccount'";
$result = mysqli_query($db_connect,$sql_read);
$total_records = mysqli_num_rows($result);
$total_num=mysqli_fetch_assoc($result)

// $sql_insert="INSERT INTO Account_php( Account,Password) VALUES ('$userAccount','$userPassword')";
// mysqli_query($db_connect,$sql_insert);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            list-style: none;
        }
        body,html{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: linear-gradient(20deg,#3d5493,#1aa2a0) fixed center center / 100% 100%;
        }
        div{
            margin:10px 0px;
        }
    </style>
</head>
<body>
 

<div class='main'>
<?php
if($total_records >=1){
    echo "<div?>帳號已被使用，請重新註冊</div>";
    echo "<div><a href='./register.html'>返回註冊畫面</a></div>";  
    // print_r($total_num);
}else if( $userAccount==null || $userPassword==null ){   
    echo "<div>輸入不完整，請重新註冊</div>";
    echo "<div><a href='./register.html'>返回註冊畫面</a></div>";  
}else {
    $sql_insert="INSERT INTO Account_php( Account,Password) VALUES ('$userAccount','$userPassword')";
    mysqli_query($db_connect,$sql_insert);
    echo "<div>已註冊成功，請點選返回登入畫面，重新登入</div>";
    echo "<div><a href='./login.html'>返回登入畫面</a></div>";    
}
?>
</div>

</body>
</html>