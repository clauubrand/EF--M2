
$(document).ready(function() {

    // 2. Validación del Formulario
   $(document).ready(function() {
    $("#enviar_formulario").on("click", function(event) {
        event.preventDefault();

        // valores usando .val()
        const nombre = $("#nombref").val();
        const correo = $("#correof").val();
        const mensaje = $("#mensajef").val(); 

        // Validación
        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, rellena todos los campos.");
            console.log("Datos no enviados");
        } else {
            console.log("Datos enviados:", { nombre, correo, mensaje });
            alert(`¡Gracias ${nombre}! Tu solicitud para el día ${mensaje} ha sido enviada.`);
            
            //Limpia el formulario tras el envío
            $("#reservaForm")[0].reset();
        }
    });
});

    // 3. Implementación de Smooth Scroll
$('a[href^="#"]').on('click', function(event) {
    // Busca el elemento al que apunta el href (ej: #Proyectos)
    const target = $(this.getAttribute('href'));

    // Si el elemento existe en el HTML
    if (target.length) {
        event.preventDefault(); // Evita el salto brusco
        const paddingSuperior = 100; // se ajusta el pading superior para evitar tapar el titulo con la barra de navegación
        
        // Animación suave hacia la posición 'top' del elemento
        $('html, body').stop(true, true).animate({
            scrollTop: target.offset().top - paddingSuperior
        }, 800);
    }
    return false;
});
});