<?php
$db_host='localhost';
$db_userName ='root';
$db_password='';
$db_name='test';

$db_connect = @mysqli_connect($db_host,$db_userName,$db_password,$db_name);
if(!$db_connect){
    die ('資料庫連結失敗');
}else{
    // echo '資料庫連結成功';
}
?>