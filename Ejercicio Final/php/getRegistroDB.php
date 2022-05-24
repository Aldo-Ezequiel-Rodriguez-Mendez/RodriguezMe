<?php

$idCamiseta=$_POST['par1'];

$hostname='localhost';
$database='19100243';
$username='root';
$password='';
$port='3306';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try {
$consultaSql = "select * from camiseta where idCamiseta=".$idCamiseta;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>