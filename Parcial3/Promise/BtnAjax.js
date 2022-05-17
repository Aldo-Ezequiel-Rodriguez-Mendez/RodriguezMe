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
          $.post('getregistro.php',{},function(data){

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

      $('#btnCambiar').click(function() {
            let promesa = new Promise(function(resolve,reject){
                  var solicitud = new XMLHttpRequest();
                  solicitud.onreadystatechange = function() {
                  if (solicitud.readyState == 4 && solicitud.status == 200) {
                        resolve(solicitud.responseText);
                  }};
                  solicitud.open("GET", "getHeader.txt", true);
                  solicitud.send();
            });      
            promesa.then(function(value){document.getElementById("enca").innerHTML = value;});

            new Promise(function(resolve,reject){
                  var solicitud = new XMLHttpRequest();
                  solicitud.onreadystatechange = function(){
                  if(solicitud.readyState == 4 && solicitud.status == 200){
                        resolve(solicitud.responseText);
                  }};
                  solicitud.open("GET", "getHeader.txt", true);
                  solicitud.send();
            }).then(value => document.getElementById("enca").innerHTML = value);
      });
});