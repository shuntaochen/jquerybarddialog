/// <reference path="jquery-2.1.1.min.js" />
/**
 * @license jquery.tableheaderstick 1.0.0
 * (c) 2010-infinity China, Shanghai. CalosChen
 * License: MIT
 * Usage: $(table).stick();
 * Description: A jquery plugin which creates a stuck header for origin html table even when scrolling.
 */

; (function ($) {
    $.fn.stick = function () {
        var $t = $(this);
        var h = $t.attr('s_sticked');
        debugger
        if (h) return;
        var $w = function () { return $t.width(); };
        var $scope = $t.closest('div').css({ 'position': 'relative', 'overflow': 'hidden' });
        $('<style type="text/css">.f { background-color:#ffffff; position: absolute; top: 0; left: 0; }</style>').appendTo('head');
        $t.wrap('<div class="b" style="width:100%;height:100%;overflow:auto;" />').before($t.clone().removeAttr('id').addClass('f'));
        var $f = $('.f', $scope);
        $('tbody', $f).empty();
        function resize() {
            $f.width($w());
            $('th', $f).each(function (i) {
                $(this).width($('th', $t).eq(i).width());
            });
        }
        $('.b', $scope).scroll(function () {
            $f.css('left', 0 - $(this).scrollLeft())
        })
        $(window).resize(resize);
        resize();
        $t.attr('s_sticked', true);
    }
}(jQuery));