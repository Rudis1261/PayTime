// Time to privatize
(function ($) {

    // The data-module selector
    var dataInit = $('[data-module="paytime"]');

    // Main function
    $.fn.payTime = function() {
        var items = $('.item', this);
        var navs = $('.nav', this);

        // Check for items
        if (typeof items === "undefined" || typeof items.length === 0) {
            console.log("No items to work against");
            return this;
        }

        // OnClick toggle the class to the item you would like to be active
        items.on('click', function(){
            items.removeClass('active');
            $(this).addClass('active');
            return this;
        });
    }

    // Auto init via data
    if (dataInit.length > 0) {
        dataInit.payTime();
    }

}( jQuery ));