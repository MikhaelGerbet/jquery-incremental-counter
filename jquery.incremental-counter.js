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
                "numbers": 4
            },
            pad = function(n, width, z) {
                z = z || '0';
                n = n + '';
                return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            },
            start = function(element){

                var current_value = parseInt($(element).data('current_value')),
                    end_value = $(element).data('end_value'),
                    current_speed = 20;

                if (end_value - current_value < 5){
                    current_speed = 250;
                    current_value += 1;
                } else if(end_value - current_value < 20){
                    current_speed = 50;
                    current_value += 1
                } else if(end_value - current_value < 50){
                    current_speed = 25;
                    current_value += 1
                } else{
                    current_value += 19;
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
                var padedNumber = pad(value, options.numbers),
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

        this.each(function(index,element){

            //get value
            $(element).data({
                current_value : 0,
                end_value : parseInt( element.getAttribute('data-value')),
                current_speed : 0
            });

            //add number container
            for(var i=0 ; i < options.numbers ; i++){
                $(element).append('<div class="num">0</div>');
            }

            start($(element));

        });
        return this;
    };
})(jQuery);
