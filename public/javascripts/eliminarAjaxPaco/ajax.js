(function(){

    let bttons = document.getElementsByClassName('eliminarCliente');

    // console.log(bttons[1]);

    let postFunction = (e) => {
        e.preventDefault();

        let id = e.target.id;

        console.log(e.target.parentNode.parentNode);
        // Ajax Function ------------------------------------------------------------------
        var xhr = new XMLHttpRequest(); // Creo el objeto XMLHttpRequest y lo guardo en xhr

        // Se abre la peticion estableciendo los parametros de accion (get, post, delete, update, etc)
        xhr.open('DELETE', '/clientes/eliminarCliente', true); // Preparando la peticion al servidor
        
        // Establecer los encabezados para hacer la peticion varia depende de lo que vayas y como lo mandes
        xhr.setRequestHeader('Content-Type', 'application/Json');

        // Se envia la peticion, si es post envias algo y si es get nada solo pides
        xhr.send(JSON.stringify({id : id})); // Enviando la peticion

        // Cuando la solicitud a sido devuelta por el servidor
        xhr.onload = function() {
            if(xhr.status != 200) {
                alert('Algo salió mal');

            } else {
                // Si salio bien borrar en el dom 
                console.log(xhr.response);
                e.target.parentNode.parentNode.remove();
            }
        }
        // End Ajax---------------------------------------------------------------------------------
    }

    for(var i = 0; i < bttons.length; i++){
        bttons[i].addEventListener('click', postFunction);
        // console.log('i: ', i);
        // console.log(bttons[i]);
    }
    
})();