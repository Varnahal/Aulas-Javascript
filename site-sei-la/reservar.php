<?php
session_start();
ob_start();
require_once 'rod-nav.php';
require_once 'classes.php';
$logged = false;
if (isset($_SESSION['user'])) {
    $logged = true;
}
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
    if(!$logged){
        echo'necessario estar logado para reservar';
    }else{
        echo'BEM VINDO!';
    }
    ?>
    <?php
    $dados = filter_input_array(INPUT_POST);
    
    if(isset($dados['btn-reservar'])){
        var_dump($dados);
        echo $_SESSION['user'];
       if($p->criarreserva($dados['horas'],$dados['nump'],$_SESSION['user'],$dados['dia'])){
        $_SESSION['msg'] = "Cadastrado com sucesso<br>Dia:".$dados['dia']."<br>Horario:".$dados['horas']." horas<br>Numdero de pessoas:".$dados['nump'].$p->enviado;
        header('Location:confirmação.php?id='.$p->id);
       }else{
        $_SESSION['msg'] = 'erro';
       }
    }
    
    ?>

    <form action="" method="post">
        numero de pessoas<input type="number" max="10" maxlength="2" name="nump">
        dia<input type="date" name="dia">
        horas <select name="horas" id="">
            <option value="11">11</option>
            <option value="11">12</option>
            <option value="11">13</option>
            <option value="11">14</option>
            <option value="11">15</option>
        </select>
        <input type="submit" value="Reservar" name="btn-reservar">
    </form>
    <?php
    rodape();
    ?>
</body>
</html>