(function()
{

    jQuery(document).ready(function()
    {

        if ( jQuery('body').hasClass("home")) {


            var buttons = jQuery("#av-layout-grid-1 .flex_cell_inner .avia-button");
            buttons.each( function(){

                jQuery(this).attr('href','');
                jQuery(this).click(buttons, function($event){

                    $event.preventDefault();
                    $event.data.css('background','transparent');
                    $event.data.css('color','#017635');

                    jQuery(this).css('background','#017635');
                    jQuery(this).css('color','white');
                });
            });



        }
    
    });

})();