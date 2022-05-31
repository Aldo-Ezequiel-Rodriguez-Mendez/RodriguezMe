<?php

define("server", "localhost");
define("user", "root");
define("password", "");
define("database", "19100243");

$con = mysqli_connect(server, user, password, database);

    $response = mysqli_query($con, 'select * from camiseta');
?>
<!DOCTYPE html> 
<html> 
	<head> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
		<title> Fetch Data From Database </title> 
	</head> 
	<body> 
    <div class="table-responsive">
	<table  class="table"> 
    <thead class="thead-dark">
        <th scope="row">Id</th>
        <th scope="col">Proveedor</th>
        <th scope="col">Marca</th>
        <th scope="col">Talla</th>
        <th scope="col">Material</th>
        <th scope="col">Stock</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio</th>	  
    </thead>
		
		<?php while($fetch=mysqli_fetch_array($response)) 
		{ 
		?> 
        <tbody>
		<tr> 
            <th scope="row"><?php echo $fetch['idCamiseta']; ?></th> 
		    <td><?php echo $fetch['nomProveedor']; ?></td> 
		    <td><?php echo $fetch['nomMarca']; ?></td> 
		    <td><?php echo $fetch['talla']; ?></td> 
            <td><?php echo $fetch['material']; ?></td> 
            <td><?php echo $fetch['stock']; ?></td> 
            <td><?php echo $fetch['descripcion']; ?></td> 
            <td><?php echo $fetch['precio']; ?></td> 
		</tr> 
        </tbody>
	<?php 
               } 
          ?> 

	</table>
    </div>
	</body> 
	</html>