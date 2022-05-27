<?php
include("conexionDB.php");

try {
$consultaSql = "select * from camiseta where idCamiseta=".$idCamiseta;

$consultaSql= "INSERT INTO camiseta (name, lastname, email) VALUES ('Test', 'Testing', 'Testing@tesing.com')"
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