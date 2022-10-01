<?php
session_start();
ob_start();
require_once 'rod-nav.php';
require_once 'classes.php';
$p = new usuario();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="principal.css">
</head>
<body>
    <?php
    reader();
    //echo $_SESSION['user'];
    if(isset($_SESSION['msg'])){
        echo $_SESSION['msg'];
        unset($_SESSION['msg']);
    }
    if(isset($_SESSION['msg1'])){
        echo $_SESSION['msg1'];
        unset($_SESSION['msg1']);
    }
    ?>
    
    
    <?php
    rodape();
    ?>
</body>
</html>