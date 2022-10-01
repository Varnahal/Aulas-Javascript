<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
class usuario{

    private $pdo;
    public $enviado;
    public $id;

    public function __construct() 
    {
        $opcoes = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8');
        
        try 
        {
            $this->pdo = new PDO("mysql:dbname=seila;host=localhost;charset=utf8",'root','',$opcoes);
        } catch (Exception $e) {
            echo"Erro por favor tente novamente. Erro:$e";
        }catch (PDOException $e) {
            echo"Erro por favor tente novamente. Erro:$e";
        }
    }
    function criaruser($n,$m,$p){
        $cmd = $this->pdo->prepare('INSERT INTO users(name,password,mail) VALUES(:n,:p,:m)');
        $cmd->bindValue(':m',$m);
        $cmd->bindValue(':n',$n);
        $cmd->bindValue(':p',$p);
        $cmd->execute();

        $cmd = $this->pdo->prepare('SELECT * FROM users WHERE name=:n AND password=:p AND mail=:m');
        $cmd->bindValue(':m',$m);
        $cmd->bindValue(':n',$n);
        $cmd->bindValue(':p',$p);
        $cmd->execute();
        $dados = $cmd->fetch();

        $_SESSION['user'] = $dados['id'];
        return true;
    }
    function logar($m,$p){
        $cmd = $this->pdo->prepare('SELECT * FROM users WHERE password=:p AND mail=:m');
        $cmd->bindValue(':m',$m);
        $cmd->bindValue(':p',$p);
        $cmd->execute();
        $dados = $cmd->fetch();

        
        if($cmd->rowCount() == 1){
            $_SESSION['user'] = $dados['id'];
            return true;
            
        }else{
            return false;
        }
    }
    function criarreserva($h,$np,$ui,$d){
        $cmd = $this->pdo->prepare('INSERT INTO reservas(hora,num_pessoas,userid,dia,cod_verif) VALUES(:h,:np,:ui,:d,:cv)');
        $cod_verif = rand(1000,9999);
        $cmd->bindValue(':h',$h);
        $cmd->bindValue(':ui',$ui);
        $cmd->bindValue(':d',$d);
        $cmd->bindValue(':np',$np);
        $cmd->bindValue(':cv',$cod_verif);
        $cmd->execute();

        $cmd = $this->pdo->prepare('SELECT id FROM reservas WHERE userid=:ui AND cod_verif = :cv');
        $cmd->bindValue(':cv',$cod_verif);
        $cmd->bindValue(':ui',$ui);
        $cmd->execute();
        $id = $cmd->fetch();
        $this->id = $id['id'];


    require './PHPMailer/Exception.php';
    require './PHPMailer/PHPMailer.php';
    require './PHPMailer/SMTP.php';

    try {
        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'a4e7ed189588ed';
        $mail->Password = '4241571fee6bf9';
        
        $mail->setFrom('danielmarcelino91@gmail.com', 'Daniel');
        $mail->addAddress('danielmarcelino91@gmail.com', 'Carlos');
        $mail->isHTML(true);
        $mail->Subject = 'Assunto do E-Mail';
        $mail->Body = 'Codigo de verificação: '.$cod_verif;
        if(!$mail->send()){
            $this->enviado='não enviou';
        }else{
            $this->enviado ='email enviado';
        }
        
    } catch (Exception $e) {
        $this->enviado = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }


        if($cmd->rowCount() == 1){
            return true;
        }else{
            return false;
        }
        

    }
    function verificaCodigo($id,$cod){
        $cmd = $this->pdo->prepare('SELECT id FROM reservas WHERE id=:id AND cod_verif = :cv');
        $cmd->bindValue(':cv',$cod);
        $cmd->bindValue(':id',$id);
        $cmd->execute();
        if($cmd->rowCount()==1){
            return true;
        }
        else{
            return false;
        }
    }
}
