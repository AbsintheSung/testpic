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
    
<?php
include './connectMysql.php';
$loginAccount = $_POST['loginAccount'];
$loginPassword = $_POST['loginPassword'];

$sql_read="SELECT * FROM account_php WHERE Account = '$loginAccount'";
$result = mysqli_query($db_connect,$sql_read);
$total_records = mysqli_num_rows($result);
$total_num=mysqli_fetch_assoc($result);

// print_r($total_num);
// echo $total_num['Id'];
// echo $total_num['Account'];
// echo $total_num['Password'];

if($total_records==1&&$loginPassword==$total_num['Password']){
    echo "你輸入正確";
    session_start();
    $_SESSION["login"]=true;
    $_SESSION["Account"]=$total_num['Account'];
    $_SESSION["Password"]=$total_num['Password'];
    header('location:main.php');

}else if($total_records==0){   
    echo "<div>無此帳號，請重新輸入正確帳號或是重新註冊</div>";
    echo "<div><a href='./login.html'>返回登入畫面</a></div>"; 
}
else if($total_records==1&&$loginPassword!=$total_num['Password']){
    echo "<div>密碼輸入錯誤，請重新登入</div>";
    echo "<div><a href='./login.html'>返回登入畫面</a></div>";   
}
?>

</body>
</html>
