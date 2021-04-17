/*
Item Name : CSS3 Mega Drop Down Menu
Author URI : http://codecanyon.net/user/Pixelworkshop/
Item URI : http://codecanyon.net/item/css3-mega-drop-down-menu/126387
Version : 6.2
*/



/*! Hammer.JS - v1.0.2 - 2013-02-27
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(t){"use strict";function e(){if(!n.READY){n.event.determineEventTypes();for(var t in n.gestures)n.gestures.hasOwnProperty(t)&&n.detection.register(n.gestures[t]);n.event.onTouch(document,n.EVENT_MOVE,n.detection.detect),n.event.onTouch(document,n.EVENT_END,n.detection.endDetect),n.READY=!0}}var n=function(t,e){return new n.Instance(t,e||{})};n.defaults={stop_browser_behavior:{userSelect:"none",touchCallout:"none",touchAction:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},n.HAS_POINTEREVENTS=navigator.msPointerEnabled,n.HAS_TOUCHEVENTS="ontouchstart"in t,n.EVENT_TYPES={},n.DIRECTION_DOWN="down",n.DIRECTION_LEFT="left",n.DIRECTION_UP="up",n.DIRECTION_RIGHT="right",n.POINTER_MOUSE="mouse",n.POINTER_TOUCH="touch",n.EVENT_START="start",n.EVENT_MOVE="move",n.EVENT_END="end";var i=navigator.userAgent;n.STOP_MOUSEEVENTS=n.HAS_TOUCHEVENTS&&i.match(/(like mac os x.*mobile.*safari)|android|blackberry/i),n.plugins={},n.READY=!1,n.Instance=function(t,i){var r=this;return e(),this.element=t,this.enabled=!0,this.options=n.utils.extend(n.utils.extend({},n.defaults),i||{}),this.options.stop_browser_behavior&&n.utils.stopDefaultBrowserBehavior(this),n.event.onTouch(t,n.EVENT_START,function(t){r.enabled&&n.detection.startDetect(r,t)}),this},n.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=document.createEvent("Event");return n.initEvent(t,!0,!0),n.gesture=e,this.element.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,s=!1,o=!1;n.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,i){var a=this;this.bindDom(t,n.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();u.match(/mouse/)&&n.STOP_MOUSEEVENTS||(u.match(/start|down|move/)&&(1===c.which||u.match(/touch/)||c.pointerType&&c.pointerType==c.MSPOINTER_TYPE_TOUCH)&&(s=!0),u.match(/touch|pointer/)&&(o=!0),!s||o&&u.match(/mouse/)||(n.HAS_POINTEREVENTS&&e!=n.EVENT_END&&n.PointerEvent.updatePointer(e,c),e===n.EVENT_END&&null!==r?c=r:r=c,i.call(n.detection,a.collectEventData(t,e,c)),n.HAS_POINTEREVENTS&&e==n.EVENT_END&&n.PointerEvent.updatePointer(e,c)),u.match(/up|cancel|end/)&&(s=!1,o=!1,r=null,n.PointerEvent.reset()))})},determineEventTypes:function(){var t;t=n.HAS_POINTEREVENTS?["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],n.EVENT_TYPES[n.EVENT_START]=t[0],n.EVENT_TYPES[n.EVENT_MOVE]=t[1],n.EVENT_TYPES[n.EVENT_END]=t[2]},getTouchList:function(t){return n.HAS_POINTEREVENTS?n.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,i){var r=this.getTouchList(i,e),s=n.POINTER_TOUCH;return(i.type.match(/mouse/)||i.poinerType&&i.pointerType===i.MSPOINTER_TYPE_MOUSE)&&(s=n.POINTER_MOUSE),{center:n.utils.getCenter(r),timestamp:i.timestamp||(new Date).getTime(),target:i.target,touches:r,eventType:e,pointerType:s,srcEvent:i,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return n.detection.stopDetect()}}}},n.PointerEvent={pointers:{},getTouchList:function(){var t=this.pointers,e=[];return Object.keys(t).sort().forEach(function(n){e.push(t[n])}),e},updatePointer:function(t,e){t==n.EVENT_END?delete this.pointers[e.pointerId]:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e)},reset:function(){this.pointers={}}},n.utils={extend:function(t,e){for(var n in e)t[n]=e[n];return t},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var i=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return i>=r?t.pageX-e.pageX>0?n.DIRECTION_LEFT:n.DIRECTION_RIGHT:t.pageY-e.pageY>0?n.DIRECTION_UP:n.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==n.DIRECTION_UP||t==n.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t){var e,n=["webkit","khtml","moz","ms","o",""],i=t.options.stop_browser_behavior,r=t.element;if(i&&r.style){for(var s=0;n.length>s;s++)for(var o in i)i.hasOwnProperty(o)&&(e=o,n[s]&&(e=n[s]+e.substring(0,1).toUpperCase()+e.substring(1)),r.style[e]=i[o]);"none"==i.userSelect&&(r.onselectstart=function(){return!1})}}},n.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:n.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,i=this.gestures.length;i>n;n++){var r=this.gestures[n];if(!this.stopped&&e[r.name]!==!1&&r.handler.call(r,t,this.current.inst)===!1){this.stopDetect();break}}this.current&&(this.current.lastEvent=t)}},endDetect:function(t){this.detect(t),this.stopDetect()},stopDetect:function(){this.previous=n.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var i=0,r=t.touches.length;r>i;i++)e.touches.push(n.utils.extend({},t.touches[i]))}var s=t.timestamp-e.timestamp,o=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=n.utils.getVelocity(s,o,a);return n.utils.extend(t,{deltaTime:s,deltaX:o,deltaY:a,velocityX:c.x,velocityY:c.y,distance:n.utils.getDistance(e.center,t.center),angle:n.utils.getAngle(e.center,t.center),direction:n.utils.getDirection(e.center,t.center),scale:n.utils.getScale(e.touches,t.touches),rotation:n.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var e=t.defaults||{};return e[t.name]===void 0&&(e[t.name]=!0),n.utils.extend(n.defaults,e),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},n.gestures=n.gestures||{},n.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case n.EVENT_START:clearTimeout(this.timer),n.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==n.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case n.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case n.EVENT_END:clearTimeout(this.timer)}}},n.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==n.EVENT_END){var i=n.detection.previous;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n.detection.current.name=i&&"tap"==i.name&&t.timestamp-i.lastEvent.timestamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance?"doubletap":"tap",e.trigger(n.detection.current.name,t)}}},n.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==n.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},n.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1},triggered:!1,handler:function(t,e){if(n.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,void 0;if(!(e.options.drag_max_touches>0&&t.touches.length>e.options.drag_max_touches))switch(t.eventType){case n.EVENT_START:this.triggered=!1;break;case n.EVENT_MOVE:if(t.distance<e.options.drag_min_distance&&n.detection.current.name!=this.name)return;n.detection.current.name=this.name;var i=n.detection.current.lastEvent.direction;e.options.drag_lock_to_axis&&i!==t.direction&&(t.direction=n.utils.isVertical(i)?0>t.deltaY?n.DIRECTION_UP:n.DIRECTION_DOWN:0>t.deltaX?n.DIRECTION_LEFT:n.DIRECTION_RIGHT),this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),e.trigger(this.name+t.direction,t),(e.options.drag_block_vertical&&n.utils.isVertical(t.direction)||e.options.drag_block_horizontal&&!n.utils.isVertical(t.direction))&&t.preventDefault();break;case n.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},n.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,e){if(n.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,void 0;if(!(2>t.touches.length))switch(e.options.transform_always_block&&t.preventDefault(),t.eventType){case n.EVENT_START:this.triggered=!1;break;case n.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(e.options.transform_min_scale>i&&e.options.transform_min_rotation>r)return;n.detection.current.name=this.name,this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),r>e.options.transform_min_rotation&&e.trigger("rotate",t),i>e.options.transform_min_scale&&(e.trigger("pinch",t),e.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case n.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},n.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1},handler:function(t,e){e.options.prevent_default&&t.preventDefault(),t.eventType==n.EVENT_START&&e.trigger(this.name,t)}},n.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==n.EVENT_END&&e.trigger(this.name,t)}},t.Hammer=n,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return n})})(window),function(t){Hammer.event.bindDom=function(e,n,i){t(e).on(n,function(t){var e=t.originalEvent;e.pageX||(e.pageX=t.pageX,e.pageY=t.pageY),e.target||(e.target=t.target),e.button&&(e.which=e.button),e.preventDefault||(e.preventDefault=t.preventDefault),e.stopPropagation||(e.stopPropagation=t.stopPropagation),i.call(this,e)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){return t(n.srcEvent.target).trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",Hammer(this,e||{}))})}}(jQuery);



(function ($) {


    var methods = {
       

        init:function (options) {


            return this.each(function () {


                var megaMenu = $(this),
                    menuItem = $(megaMenu).children('li'),
                    menuItemLink = $(menuItem).children('.menuitem_drop'),
                    menuDropDown = $(menuItem).find('.dropdown_1column, .dropdown_2columns, .dropdown_3columns, .dropdown_4columns, .dropdown_5columns, .dropdown_fullwidth'),
                    menuItemFlyOut = $(menuItem).find('li'),
                    menuItemFlyOutLink = $(menuItemFlyOut).find('.parent'),
                    menuItemFlyOutDropDown = $(menuItemFlyOut).find('ul'),
                    menuButton = $('.megamenu_button');

                menuItemElement = $(menuItem).add(menuItemFlyOut);
                menuDropDownElement = $(menuDropDown).add(menuItemFlyOutDropDown);


                if ("ontouchstart" in document.documentElement) {

                    megaMenuDropDownPosition();

                    $(menuDropDown).css({'display':'block'}).hide();

                    if ($(window).width() > 768) {
                        
                    }

                    $(menuButton).hammer().on('tap', function () {
                        $(this).toggleClass('megamenu_button_active');
                        $(menuItem).not(":eq(0)").toggle(0);
                    });

                    $(menuItemElement).addClass('noactive').removeClass('active');

                    $(menuItemLink).hammer().on('tap', function () {
                        var $this = $(this);
                        $this.parent(menuItem).toggleClass('active noactive')
                            .find(menuDropDown).toggle(0).end()
                            .siblings().removeClass('active').addClass('noactive')
                            .find(menuDropDown).hide(0);
                        return false;
                    });

                    $(menuItemFlyOutLink).hammer().on('tap', function () {
                        var $this = $(this);
                        $this.parent(menuItemFlyOut)
                            .toggleClass('active noactive')
                            .find(menuItemFlyOutDropDown).first()
                            .toggle(0);
                        $this.parent(menuItemFlyOut).siblings().addClass('noactive').removeClass('active')
                            .find(menuItemFlyOutDropDown).hide(0);
                        $this.parent(menuItemFlyOut).siblings()
                            .find(menuItemFlyOut).addClass('noactive').removeClass('active');
                        return false;
                    });

                    $(document).hammer().on('tap', function () {
                        $(menuItemElement).addClass('noactive');
                        $(menuDropDownElement).hide(0);
                    });
                    $(megaMenu).hammer().on('tap', function (event) {
                        event.stopPropagation();
                    });
                    $(window).bind('orientationchange', function () {
                        $(menuItemElement).addClass('noactive');
                        $(menuButton).removeClass('megamenu_button_active');
                        $(menuDropDownElement).hide(0);
                        megaMenuDropDownPosition();
                    });

                    return;


                }


            }); // End each

        }

    };


    $.fn.megaMenuMobile = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('No found method ' + method);
        }

    };


    function megaMenuDropDownPosition() {

        if ($(window).width() <= 768) {
            $('.megamenu').children('li').hide(0);
            $('.megamenu_button').show(0);
            $('.dropdown_flyout .levels').find('ul').css({'left':'0', 'top':'auto'}).show();
        }

        else {
            $('.megamenu').children('li').show(0);
            $('.megamenu_button').hide(0);
            $('.dropdown_flyout .levels').find('ul').css({'left':'96%', 'top':'-23px'}).hide();
            $('.megamenu_vertical_right .dropdown_flyout .levels').find('ul').css({'left':'auto', 'right':'100%', 'top':'-23px'}).hide();
        }

        if ($(window).width() > 768 && $(window).width() > 1024) {
            $('.megamenu_vertical_right .dropdown_flyout .levels').find('ul').css({'left':'96%', 'right':'auto', 'top':'-23px'}).hide();
        }

    }


})(jQuery);



function megaMenuContactForm() {
    
    
    $('#megamenu_form #submit').click(function(){

        $('.error').hide(0);
        var name = $('input#name').val();
        if (name == "" || name == " " || name == "Name") {
            $('input#name').focus().before('<div class="error">Please enter your name</div>');
            return false;
        }
        
        var email_test = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var email = $('input#email').val();
        if (email == "" || email == " " || !email_test.test(email)) {
           $('input#email').focus().before('<div class="error">Please enter a valid email address</div>');
           return false;
        }
        
        var message = $('#message').val();
        if (message == "" || message == " " || message == "Message") {
            $('#message').focus().before('<div class="error">Please enter a message</div>');
            return false;
        }
        
        var data_string = $('#megamenu_form').serialize();

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: data_string,
            success: function() {
                $('#megamenu_form').find('.error').hide(0);
                $('#megamenu_form').before('<div class="sent"></div><br>');
                $('.sent').html('Your email has been sent successfully !');
            }//end success function


        }) //end ajax call

        return false;


    }) //end click function

    
}

