/**
 * @license jquery.tableheaderstick 1.0.0
 * (c) 2010-infinity China, Shanghai. CalosChen
 * License: MIT
 * Usage: $(table).stick();
 * Description: A jquery plugin which creates a stuck header for origin html table even when scrolling.
 */
(function (n) { n.fn.stick = function () { function f() { i.width(u()); n("th", i).each(function (i) { n(this).width(n("th", t).eq(i).width()) }) } var t = n(this), e = t.attr("s_sticked"), u, r, i; e || (u = function () { return t.width() }, r = t.closest("div").css({ position: "relative", overflow: "hidden" }), n('<style type="text/css">.f { background-color:#ffffff;z-index:1; position: absolute; top: 0; left: 0; }<\/style>').appendTo("head"), t.wrap('<div class="b" style="width:100%;height:100%;overflow:auto;" />').before(t.clone().removeAttr("id").addClass("f")), i = n(".f", r), n("tbody", i).empty(), n(".b", r).scroll(function () { i.css("left", 0 - n(this).scrollLeft()) }), n(window).resize(f), f(), t.attr("s_sticked", !0)) } })(jQuery);