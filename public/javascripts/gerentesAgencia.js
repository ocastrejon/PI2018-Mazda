$(function(){
    // funcion ajax eliminar producto
    $('#tablaGerentesAgencia #eliminarGerenteAgencia').click(function(e){
        // alert('Hola;')
        e.preventDefault();
        let elemento = $(this);
        let id = elemento.parent().parent().find('#id_gerente_agencia').text();
        let confirmar = confirm('Desea eliminar el Gerente de Agencia?');
        
        if(confirmar){
            $.ajax({
                url: 'http://localhost:3333/inicioGA/gerentesAgencia/eliminarGerenteAgencia',
                method: 'delete',
                data: {id: id},
                success: function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    } else {
                        alert('Varios trabajadores dependen de este Gerente, no se puede eliminar.');
                    }
                }
            });
        }
    });
});