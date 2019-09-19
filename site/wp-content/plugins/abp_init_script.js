(function()
{

    /* jQuery(document).ready ejecuta la función definida dentro cuando la página web ya se terminó de cargar,
        lo que garantiza que todos los elementos de la página (botones, <div>, <a>, y lo que sea por ahí pa
        allá, ya se cargaron y por lo tanto se pueden manipular por js */

    jQuery(document).ready(
        
        function() {



            var headerContainer = jQuery("#search-placeholder");
                headerContainer.append("<form action=\"/\" id=\"searchform\" method=\"get\" class=\"\" style=\"margin-right: 15%;\">" + 
                "<div><input style=\"background: transparent;height: 30px;line-height:30px;color: gray;\" type=\"submit\" value=\"\ue803\" id=\"searchsubmit\" class=\"button avia-font-entypo-fontello\">" +
                "<input style=\"min-width: 200px;padding: 5px;\" type=\"text\" id=\"s\" name=\"s\" value=\"\" placeholder=\"Suche...\"></div></form>");

            var secondMenuSection = jQuery("#second-menu-placeholder");
            var secondMenu = jQuery("#second-menu-placeholder .avia-menu.av-main-nav-wrap");
            var wholeWrap = jQuery("#container_wrap");
            secondMenuSection.remove();
            wholeWrap.append(secondMenu);

            /*var originalCartContainer = jQuery('#header_main .menu-item.cart_dropdown');
            var originalCart = jQuery('#header_main .menu-item.cart_dropdown .cart_dropdown_first');

            var menu = jQuery('.avia-menu ul');
            var burger = jQuery('.av-burger-menu-main.menu-item-avia-special');
            originalCart.insertBefore(burger);
            originalCartContainer.remove();*/

            jQuery('.menu-item-search-dropdown').remove();


            var cpw = jQuery('#categories_presentation_wrapper .container .content');
            if (cpw.length > 0){
                cpw.children().remove();
                var presentation = jQuery('#categories_presentation');
                cpw.append(presentation);
            }

            if ( jQuery('body').hasClass("product-template-default")) {

                var prod_sumary = jQuery('.product .summary.entry-summary');
                var prod_details = jQuery('.woocommerce-product-details__short-description');
                var prod_cart = jQuery('.product .cart');
                prod_cart.after(prod_details);
                var prod_meta = jQuery('.product .product_meta');
                prod_meta.remove();
                var price = jQuery('.product p.price');
                prod_cart.prepend(price);

            }

            if ( jQuery('body').hasClass("page-id-499")) {
                var container = jQuery('#categories_presentation');
                var text_block = jQuery('#categories_presentation > .flex_cell.av_two_fifth .avia_textblock');
                container.append(text_block);
            }
            

        }
    );

})();