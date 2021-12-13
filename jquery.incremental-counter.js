/*
 Plugin Name: jQuery plugin incremental counter
 Plugin URI: https://github.com/MikhaelGerbet/jquery-incremental-counter
 Description: jQuery plugin incremental counter is a simple counter animated
 Author: GERBET Mikhael
 Author URI: https://github.com/MikhaelGerbet
 License: MIT
 */

(function($){
    $.fn.incrementalCounter = function(options){
        //default options
        var defauts = {
                "digits": 4
            },
            pad = function(n, width, z) {
                z = z || '0';
                n = n + '';
                return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            },
            start = function(element){

                var current_value = parseInt($(element).data('current_value')),
                    end_value = parseInt($(element).data('end_value')),
                    current_speed = 20;

                if(end_value === 0) {
                    return false;
                }


                if (end_value - current_value < 5){
                    current_speed = 200;
                    current_value += 1;
                } else if(end_value - current_value < 15){
                    current_speed = 50;
                    current_value += 1
                } else if(end_value - current_value < 50){
                    current_speed = 25;
                    current_value += 3
                } else{
                    current_speed = 25;
                    current_value += parseInt((end_value - current_value)/24)
                }

                $(element).data({
                    current_value:current_value
                });

                if(current_speed){
                    setTimeout(function(){
                        display($(element),current_value);
                    },current_speed);
                }else{
                    display($(element),current_value);
                }
            },
            display = function(element,value){
                var commaValue = value.toLocaleString('ko-KR'),
                    padedNumber = pad(element.data('comma') ? commaValue : value, element.data('digits')),
                    exp = padedNumber.split(""),
                    end_value = $(element).data('end_value'),
                    nums = $(element).find('.num');
                $(exp).each(function(i,e){
                    $(nums[i]).text(exp[i]);
                });

                if(end_value != value){
                    start(element);
                }
            },
            //merge options
            options = $.extend(defauts, options);

        this.each(function(index, element){

            var default_digits = options.digits ,
                default_comma = options.comma ,
                digits =  element.getAttribute('data-digits') ?  element.getAttribute('data-digits') : default_digits ,
                comma =  element.getAttribute('data-comma') ?  element.getAttribute('data-comma') : default_comma ,
                end_value = parseInt( element.getAttribute('data-value'));

                digits = digits === 'auto' || digits < String(end_value).length ? comma ? end_value.toLocaleString('ko-KR').length : String(end_value).length : digits;

            //get value
            $(element).data({
                current_value : 0,
                end_value : end_value,
                digits : digits,
                comma: comma,
                current_speed : 0
            });

            //add number container
            for(var i=0 ; i < digits ; i++){
                $(element).append('<div class="num">0</div>');
            }

            start($(element));

        });
        return this;
    };
})(jQuery);
