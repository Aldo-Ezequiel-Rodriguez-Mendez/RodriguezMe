    $(document).ready(function() {

      $('#btn1').click(function() {
            $('#alerta1').show();
      });

      $('#btncloseAlert').click(function() {
            $('#alerta1').hide();
      });

      $('#btn2').click(function() {
            console.log("Click en boton 2, el modal se dispara con atributos de datos de bootstrap");
      });

      $('#btnjson').click(function() {
          $.post('php/getRegistro.php',{},function(data){

                console.log(data);
                $('#idPrenda').val(data.idPrenda);
                $('#nomProveedor').val(data.nomProveedor);
                $('#marca').val(data.marca);
                $('#talla').val(data.talla);
                $('#material').val(data.material);
                $('#stock').val(data.stock);
                $('#Descripcion').val(data.Descripcion);
                $('#Precio').val(data.Precio);

            },'json');
      });

      // Obtenemos un registro json del la Base de datos
      // usando el metodo $.post() de Jquery
      // $.post(URL,parametros,funciondeRetorno(),dato)
      $('#btnConsultaBD').click(function() {
            let parid=prompt("Teclee el ID a consultar");

            $.post('php/getRegistroDB.php',{par1:parid},function(data){
              refrescar(data);
              },'json');
        });

        $('#btnEliminaBD').click(function() {
            let parid=prompt("Teclee el ID a eliminar");

            $.post('php/delRegistroDB.php',{par1:parid},function(data){
              },'json');
        });

        
      
        //Funcion para cargar los datos en el input
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
});