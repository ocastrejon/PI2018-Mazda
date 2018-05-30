$(function(){
    // funcion ajax eliminar producto
    $('#tablaVendedores #eliminarVendedor').click(function(e){
        // alert('Hola;')
        e.preventDefault();
        let elemento = $(this);
        let id = elemento.parent().parent().find('#id_vendedor').text();
        let confirmar = confirm('Desea eliminar el Vendedor?');
        
        if(confirmar){
            $.ajax({
                url: 'http://localhost:3333/inicioV/vendedores/eliminarVendedor',
                method: 'delete',
                data: {id: id},
                success: function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    }
                }
            });
        }
    });
});