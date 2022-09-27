<?php
$pdo = new PDO('mysql:host=localhost;dbname=penio', 'root', '');

$rp = file_get_contents('php://input');

$obj = json_decode($rp,true);
$nome = $obj['nomea'];
$idade = $obj['idade'];

$comd = $pdo->prepare("INSERT INTO users  (nome,idade) Values (:n,:i)");
$comd->bindValue(':n',$nome);
$comd->bindValue(':i',$idade);
$comd->execute();
var_dump($nome);
?>