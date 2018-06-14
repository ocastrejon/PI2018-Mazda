$(function () {
        
// =======================================================================================
        // FUNCION AJAX PASAR DATOS A MODAL
            $(".carro").on('click', function (e) {
                e.preventDefault();   
                // $()
                console.log('value: ', e.target.parentElement.childNodes[3].value);
                console.log('chNodes: ', e.target.parentElement.childNodes[3]);


                // let buscar = e.target.parentNode.parentNode.firstElementChild.value
                // $.ajax({
                //     url: 'http://localhost:3333/clientes/buscar/',
                //     method: 'get',
                //     data: { q: buscar },
                //     success: function (res) {
                //         if (res) {
                //             console.log(res.clienteBuscar);
                //         } else {
                //             alert('Error');
                //         }
                //     }
                // });
            });
    
    
    
            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
});