$(function(){
    
    // funcion ajax eliminar producto
    $('#tablaClientes #eliminarCliente').click(function(e){
        alert('Hola;')
        e.preventDefault();
        let elemento = $(this);
        let id = elemento.parent().parent().find('#id_cliente').text();
        let confirmar = confirm('Desea eliminar el Cliente?');
        
        if(confirmar){
            $.ajax({
                url: 'http://localhost:3333/clientes/eliminarCliente',
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