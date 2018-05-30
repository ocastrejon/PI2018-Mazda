$(function(){
    // funcion ajax eliminar producto
    $('#tablaSucursales #eliminarSucursal').click(function(e){
        // alert('Hola;')
        e.preventDefault();
        let elemento = $(this);
        let id = elemento.parent().parent().find('#id_sucursal').text();
        let confirmar = confirm('Desea eliminar la Sucursal?');
        
        if(confirmar){
            $.ajax({
                url: 'http://localhost:3333/sucursales/eliminarSucursal',
                method: 'delete',
                data: {id: id},
                success: function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    } else {
                        alert('De esta agencia dependen muchos trabajadores, no se puede eliminar');
                    }
                }
            });
        }
    });
});