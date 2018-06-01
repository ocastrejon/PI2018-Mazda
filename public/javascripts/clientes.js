$(function () {

// =======================================================================================
    // FUNCION AJAX ELIMINAR CLIENTE
        $('#tablaClientes #eliminarCliente').click(function (e) {
            // alert('Hola;')
            e.preventDefault();
            let elemento = $(this);
            let id = elemento.parent().parent().find('#id_cliente').text();
            let confirmar = confirm('Desea eliminar el Cliente?');

            if (confirmar) {
                $.ajax({
                    url: 'http://localhost:3333/clientes/eliminarCliente',
                    method: 'delete',
                    data: { id: id },
                    success: function (res) {
                        if (res.res) {
                            elemento.parent().parent().remove();
                        }
                    }
                });
            }
        });


// =======================================================================================
    // FUNCION AJAX BUSCAR CLIENTE
        $("#buscar").on('click', function (e) {
            e.preventDefault();   
            let buscar = e.target.parentNode.parentNode.firstElementChild.value
            $.ajax({
                url: 'http://localhost:3333/clientes/buscar/',
                method: 'get',
                data: { q: buscar },
                success: function (res) {
                    if (res) {
                        console.log(res.clienteBuscar);
                    } else {
                        alert('Error');
                    }
                }
            });
        });



        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
});