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
    $id_reserva = filter_input(INPUT_GET,'id');
    if(isset($dados['btn-codigo'])){
        if($p->verificaCodigo($id_reserva,$dados['mail'])){
            $_SESSION['msg1'] = 'código correto reserva aprovada';
            header('Location:index.php');
        }else{
            $_SESSION['msg'] = 'codigo incorreto tente novamente';
        }
    }
    if(isset($_SESSION['msg'])){
        echo $_SESSION['msg'];
        unset($_SESSION['msg']);
    }
    
    ?>

    <form action="" method="post">
    Digite o código de verificação enviado no seu email
        <input type="number" name="mail">
        <input type="submit" value="Enviar" name="btn-codigo">
    </form>

    <?php
    rodape();
    ?>
</body>
</html>