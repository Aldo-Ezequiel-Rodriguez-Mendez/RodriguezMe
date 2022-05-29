    $(document).ready(function() {

      $('#btnConsultaBD').click(function() {
            let parid=prompt("Teclee el ID a consultar");
              try {    
                  
                  //Primero se busca si el registro existe en la base de datos
                  $.post('php/getRegistroDB.php',{par1:parid},function(data){
                        if(data.idCamiseta != null){                                                              //Sino esta vacio el objeto, quiere decir que existe en la base de datos
                              swal("Acción completada", "Se ha consultado correctamente", "success");
                              refrescar(data);
                        }else{                                                                                    //Si esta vacio el objeto, no existe la base de datos
                              swal("Error", "No se ha encontrado ningún registro con el ID ingresado", "error");
                        }
                  },'json');
              } catch (exception) {
                    swal("Error", "Ha ocurrido un error", "error");
              }
        });

        $('#btnEliminaBD').click(function() {
              try {
                  let parid=prompt("Teclee el ID a eliminar");

                  //Primero se busca si el registro existe en la base de datos
                  $.post('php/getRegistroDB.php',{par1:parid},function(data){
                        if(data.idCamiseta == null){                                                              //Sino existe mostramos un error
                              swal("Error", "Se ha encontrado ningún elemento con el ID a eliminar", "error");
                        }
                        else{                                                                                     //Si existe lo borramos
                              $.post('php/delRegistroDB.php',{par1:parid},function(data){
                                    swal("Acción completada", "Se ha eliminado correctamente", "success");
                                    limpiar();
                                },'json');
                        }
                  },'json');
              } catch (exception) {
                  swal("Error", "Ha ocurrido un error", "error");
              }

              
        });


        $('#btnAgregarBD').click(function() {
            try {
                  let idPrenda = document.getElementById("idPrenda").value; 
                  var nomProveedor = document.getElementById("nomProveedor").value; 
                  var marca = document.getElementById("marca").value; 
                  var talla = document.getElementById("talla").value; 
                  var material = document.getElementById("material").value; 
                  var stock = document.getElementById("stock").value; 
                  var Descripcion = document.getElementById("Descripcion").value; 
                  var Precio = document.getElementById("Precio").value; 

                  if(nomProveedor == "" || marca == "" || talla == "" || material == "" || stock == "" || Descripcion == "" || Precio == "")
                  {
                        swal("Error", "Favor de no dejar los campos vacíos", "error");
                  }
                  else{
                        $.post('php/addRegistroBD.php',{par1:idPrenda,par2:nomProveedor,par3:marca,par4:talla,par5:material,par6:stock,par7:Descripcion,par8:Precio},
                        function(data){  
                        },'json');
                        swal("Acción completada", "Se ha agregado correctamente", "success");  
                        limpiar();
                  } 
            } catch (exception) {
                swal("Error", "Ha ocurrido un error", "error");
            }        
      });


      $('#btnModificaBD').click(function() {
            try {
                  let parid=prompt("Teclee el ID a modificar");
                  let nomProveedor = document.getElementById("nomProveedor").value; 
                  let marca = document.getElementById("marca").value; 
                  let talla = document.getElementById("talla").value; 
                  let material = document.getElementById("material").value; 
                  let stock = document.getElementById("stock").value; 
                  let Descripcion = document.getElementById("Descripcion").value; 
                  let Precio = document.getElementById("Precio").value; 
                
                  if(parid == "" || nomProveedor == "" || marca == "" || talla == "" || material == "" || stock == "" || Descripcion == "" || Precio == "")  //Validar que no deje los campos vacios
                  {
                        swal("Error", "Favor de no dejar los campos vacíos", "error");
                  }
                  else{
                        $.post('php/getRegistroDB.php',{par1:parid},function(data){                                                                         //Buscamos si primero existe el elemento para modificarlo
                              if (data.idCamiseta == null) {                                                                                                  //Si el objeto esta vacio, no existe y mandamos un error
                                    swal("Error", "No se ha encontrado ningún elemento con el ID a modificar", "error"); 
                              } else {                                                                                                                      //Si no esta vacio el objeto, si existe y modificamos
                                    $.post('php/modRegistroBD.php',{par1:parid,par2:nomProveedor,par3:marca,par4:talla,par5:material,par6:stock,par7:Descripcion,par8:Precio},
                                    function(data){  
                                    },'json');
                                    swal("Acción completada", "Se ha modificado correctamente", "success");
                                    limpiar();
                              }    
                        },'json');
                  }   
                        
            } catch (exception) {
                swal("Error", "Ha ocurrido un error", "error");
            }        
      });

        //Funcion para cargar los datos los input
        function refrescar(objeto) {
            console.log(objeto);

            /*#NombreDelInput / objeto.NombreDeLaColumna*/
            $('#idPrenda').val(objeto.idCamiseta);
            $('#nomProveedor').val(objeto.nomProveedor);
            $('#marca').val(objeto.nomMarca);
            $('#talla').val(objeto.talla);
            $('#material').val(objeto.material);
            $('#stock').val(objeto.stock);
            $('#Descripcion').val(objeto.descripcion);
            $('#Precio').val(objeto.precio);
      } 
      function limpiar() {
            $('#idPrenda').val("");
            $('#nomProveedor').val("");
            $('#marca').val("");
            $('#talla').val("");
            $('#material').val("");
            $('#stock').val("");
            $('#Descripcion').val("");
            $('#Precio').val("");
      }       
});