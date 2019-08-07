(function()
{

    /* jQuery(document).ready ejecuta la función definida dentro cuando la página web ya se terminó de cargar,
        lo que garantiza que todos los elementos de la página (botones, <div>, <a>, y lo que sea por ahí pa
        allá, ya se cargaron y por lo tanto se pueden manipular por js */

    jQuery(document).ready(
        
        function() {

            // Esto es para ejecutar el código de adentro en la página home solamente. Fíjense en el código html
            // que genera wordpress que a cada página, en el elemento body, le pone una clase que la distingue.
            // En el caso de home es la clase "home", en otras páginas es el número del post donde esa página se
            // guardó en la DB (ejemplo: "page-id-646").

            if ( jQuery('body').hasClass("home")) {

                // En el arreglo buttons pongo los botones de la sección 1.
                var buttons = jQuery("#av-layout-grid-1 .flex_cell_inner .avia-button");

                // Esto que está abajo ejecuta la función interior para cada boton en el arreglo
                buttons.each( function(){

                    // Limpio el atributo href del boton (pa que no haga lo que wordpress le definió por defecto)
                    jQuery(this).attr('href','');

                    // Aquí defino lo que quiero que el botón haga cuando se le da click. A esta función de jQuery
                    // llamada click se le pasan dos parámetros: en el primero paso el arreglo completo de botones, 
                    // en el segundo la función que quiero se ejecute cuando se le da click al elemento. Fíjense que
                    // a esa función se le pasa un parámetro llamado $event. Ese parámetro es importante, lo verán abajo.

                    jQuery(this).click(buttons, function($event){

                        // Otra forma de eliminar el comportamiento por defecto del botón, a veces lo que puse en la línea
                        // 26 no funciona pues worpress puso comportamiento específico para el botón por otros medios distintos
                        // del atributo href (en este caso pasó así)
                        $event.preventDefault();

                        // A la función click le pasamos como primer parámetro el arreglo de botones, jQuery pasó ese parámetro
                        // a la función interior como un miembro del parámetro $event que el creó. Es decir $event.data en este
                        // caso es buttons. Aquí lo que hago es que limpio todos los botones, poniéndo el background transparente
                        // y el color en verde. Recuerden que buttons es un arreglo de los 3 botones.
                        $event.data.css('background','transparent');
                        $event.data.css('color','#017635');

                        // Al botón en específico al que se le dió click (this) le pongo background verde y el color del texto 
                        // en white.
                        jQuery(this).css('background','#017635');
                        jQuery(this).css('color','white');
                    });
                });
            }
        }
    );

})();