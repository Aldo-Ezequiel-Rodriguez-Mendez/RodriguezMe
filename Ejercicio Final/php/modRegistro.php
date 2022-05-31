<?php
include("conexion.php");

$nomProveedor=$_POST['par2'];
$marca=$_POST['par3'];
$talla=$_POST['par4'];
$material=$_POST['par5'];
$stock=$_POST['par6'];
$Descripcion=$_POST['par7'];
$Precio=$_POST['par8'];

try {
$consultaSql= "update camiseta set nomProveedor='$nomProveedor',nomMarca='$marca',talla='$talla',material='$material',stock='$stock',descripcion='$Descripcion',precio='$Precio' where idCamiseta=$idCamiseta";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>