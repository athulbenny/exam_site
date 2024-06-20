<?php
$name=$_post['name'];
$email=$_post['email'];
$phnum=$_post['phnum'];
$domain=$_post['domain'];

$con=new mysqli('localhost','root','','formdev');
if($con->connect_error){
die('connection failed: '.con->connect_error)
}else{
$stmt= $con->prepare ("insert into attenform(name,email,phnum,domain)values(?,?,?,?)");
$stmt->bind_param("ssis",$name,$email,$phnum,$domain);
$stmt->execute();
echo"registration successful";
$stmt->close();
$con->close();



?>