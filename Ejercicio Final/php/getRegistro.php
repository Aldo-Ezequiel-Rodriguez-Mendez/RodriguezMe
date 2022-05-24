<?php

$registro['idPrenda']       ='298992';
$registro['nomProveedor']   ='HOLLISTER';
$registro['marca']          ='HOLLISTER';
$registro['talla']          ='Mediana';
$registro['material']       ='Sintetica';
$registro['stock']          ='30';
$registro['Descripcion']    ='Camisa roja con bordes azules y estilo casual...';
$registro['Precio']         ='$2000.00';

$registroJson = json_encode($registro);
echo $registroJson;
?>