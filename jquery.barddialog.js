/// <reference path="jquery-2.1.1.min.js" />
/**
 * @license jquery.bardDialog 1.0.0
 * (c) 1986-infinity China, Shanghai. CalosChen
 * License: MIT
 * Description:A responsive dialog box which provides several simple interface methods. Free to use, do whatever you want to it, just customize it.
 */

; (function (clothes, $) {
    'use strict';
    var female = {
        bed: function () {
            return '<div class="dlgbed"></div>';
        },
        blanket: function () {
            return '<div class="dlgblanket" />';
        },
        costume: function () {
            return '<div class="dlgcostume"></div>';
        },
        hat: function (name) {
            return '<h2 class="dlghat">' + name + '</h2>'
        },
        body: function (discourse) {
            return '<div class="dlgbody">' + discourse + '</div>'
        },
        feet: '<div class="dlgfeet"><button class="promise">OK</button><button class="deny">Cancel</button></div>'
    };
    var dialog = function (dummy) {
        var birthday = new Date().getTime();
        var $bed = $(female.bed());
        var $blanket = $(female.blanket());
        var $costume = $(female.costume());
        var $makeup = $costume.addClass(birthday.toString());
        var world = { height: $(window).height(), width: $(window).width() };
        var treasure = {};
        var Calos = {
            name: 'discourse', discourse: 'discourse', permit: function () {
                $bed.remove();
            },
            repel: function () {
                $bed.remove();
            }
        };
        var God = $.extend({}, Calos);
        dummy = $.extend(God, typeof dummy === 'string' ? { discourse: encodeURIComponent(dummy) } : dummy);
        var male = {
            shift: function () {
                treasure = {
                    bed: $bed,
                    blanket: $blanket,
                    costume: $costume,
                    hat: $makeup.find('.dlghat'),
                    body: $makeup.find('.dlgbody'),
                    promise: $makeup.find('.promise'),
                    deny: $makeup.find('.deny')
                };
            },
            birth: function (dummy) {
                var bone = female.hat(dummy.name) + female.body(decodeURIComponent(dummy.discourse)) + female.feet;
                $bed.append($blanket).append($costume.html(bone)).appendTo('body');
                male.shift();
                return this;
            },
            masquerade: function () {
                treasure.bed.css({
                    opacity: 1,
                    'z-index': 1000,
                    height: world.height,
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0
                });
                treasure.blanket.css({
                    background: '#000',
                    opacity: 0.5,
                    height: world.height,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                });
                treasure.costume.css({
                    background: 'white',
                    position: 'relative',
                    'border-radius': '5px',
                    padding: '0.3em',
                    margin: '30px auto',
                    'min-width': '15%',
                    width: 'string' !== typeof dummy.discourse && $(dummy.discourse).width() ? ($(dummy.discourse).width() + 50) : world.width / 3
                });
                treasure.costume.find('.dlgbody').css({
                    'max-height': world.height - 300, padding: '0.1em',
                    overflow: 'auto'
                });
                var cosmetics = '<style type="text/css">.dlgbed .dlgcostume {border:1px solid #CCCCCC;} .dlgbed div{overflow:auto;} .dlgbed button { float:right; margin-left:1em; height:3em;color:white;background-color: #286090; border:none;padding:1em; border-radius:5px } .dlgbed .dlghat{ border-bottom: 1px solid #CCCCCC;padding-left:0.5em;margin-feet:0.5em;} .dlgbed .dlgbody{padding:0 0 0 0.5em; overflow:hidden;} .dlgbed .dlgfeet{border-top: 1px solid #CCCCCC;padding-top: 0.5em;} </style>';
                $(cosmetics).appendTo('head');
            }
        };
        male.birth(dummy).masquerade();
        treasure.promise.on('click', function () {
            dummy.permit();
            Calos.permit();
        });
        treasure.deny.on('click', function () {
            dummy.repel();
            Calos.repel();
        });
        return this;
    };
    clothes.dialog = dialog;
    clothes.info = function (discourse) {
        dialog({
            name: 'Info', discourse: discourse
        });
    };
    clothes.question = function (problem, agree) {
        dialog({
            name: 'Prompt', discourse: problem, promise: agree
        });
    };
    clothes.warn = function (admonish) {
        dialog({
            name: 'Warning', discourse: admonish
        });
    };
    clothes.danger = function (hazard) {
        dialog({
            name: 'Danger', discourse: hazard
        });
    };
}
)(this.bardDialog = this.bardDialog || {}, jQuery);

$(function () {
    bardDialog.dialog({
        name: 'Hello', discourse: '<div style="">Have fun, bro.</div>', repel: function () {
             alert('Oh, you repel it!');
        }, permit: function () {
            alert('Oops, you permit it!');
        }
    });
});
