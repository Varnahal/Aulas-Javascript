<?php
session_start();
ob_start();
require_once 'rod-nav.php';
require_once 'classes.php';
$p = new usuario();
$logged = false;
if(isset($_SESSION['user'])|| isset($_SESSION['master'])){
    $logged = true;
};
if($logged){
    header('Location:index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="principal.css">
    <style>
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
    </style>
</head>
<body>
    <?php
    reader();
    ?>
    <?php
    $dados = filter_input_array(INPUT_POST);
    
    if(isset($dados['btn-cadastrar'])){
       $p->criaruser($dados['nome'],$dados['mail'],$dados['senha']);
       header('Location:index.php?');
    }
    
    ?>

    <form action="" method="post">
        Nome<input type="text" name="nome">
        Senha<input type="text" name="senha">
        Email<input type="text" name="mail">
        <input type="submit" value="Enviar" name="btn-cadastrar">
    </form>

    <?php
    rodape();
    ?>
</body>
</html>