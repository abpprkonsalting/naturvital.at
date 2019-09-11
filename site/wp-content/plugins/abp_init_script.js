(function()
{

    /* jQuery(document).ready ejecuta la función definida dentro cuando la página web ya se terminó de cargar,
        lo que garantiza que todos los elementos de la página (botones, <div>, <a>, y lo que sea por ahí pa
        allá, ya se cargaron y por lo tanto se pueden manipular por js */

    jQuery(document).ready(
        
        function() {



            var headerContainer = jQuery("#search-placeholder");
                headerContainer.append("<form action=\"/\" id=\"searchform\" method=\"get\" class=\"\" style=\"margin-right: 30%;\">" + 
                "<div><input style=\"background: transparent;line-height: 28px;color: gray;\" type=\"submit\" value=\"\ue803\" id=\"searchsubmit\" class=\"button avia-font-entypo-fontello\">" +
                "<input style=\"min-width: 250px;padding: 5px;\" type=\"text\" id=\"s\" name=\"s\" value=\"\" placeholder=\"Search\"></div></form>");

            var secondMenuSection = jQuery("#second-menu-placeholder");
            var secondMenu = jQuery("#second-menu-placeholder .avia-menu.av-main-nav-wrap");
            var wholeWrap = jQuery("#container_wrap");
            secondMenuSection.remove();
            wholeWrap.append(secondMenu);

            var originalCartContainer = jQuery('#header_main .menu-item.cart_dropdown');
            var originalCart = jQuery('#header_main .menu-item.cart_dropdown .cart_dropdown_first');

            var menu = jQuery('.avia-menu ul');
            menu.append(originalCart);
            originalCartContainer.remove();

            jQuery('#menu-item-search').remove();

        }
    );

})();