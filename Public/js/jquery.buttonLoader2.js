/*
* Source: "https://github.com/Minoli/button-loader""
* A jQuery plugin which add loading indicators into buttons
* By Minoli Perera
* MIT Licensed.
*/
(function ($) {
    $('.has-spinner').attr("disabled", false);
    $.fn.buttonLoader = function (action) {
        var self = $(this);
        if (action == 'start') {
            /* Disable <button> element  */
            $('.has-spinner').attr("disabled", true);

            /* Save innerHTML as embedded element attribute */
            $(self).attr('data-btn-html', $(self).html());

            /* Insert spinner element and set to active */
            var text = 'syncing...';
            $(self).html('<span class="spinner"><i class="fa fa-spinner fa-spin" title="button-loader"></i></span> '+text);
            $(self).addClass('active');
        }
        if (action == 'stop') {
            $(self).html($(self).attr('data-btn-html'));
            $(self).removeClass('active');
            $('.has-spinner').attr("disabled", false);
            $('.has-spinner').removeAttr("data-btn-html");
        }
    }
})(jQuery);
