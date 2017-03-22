/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-20 10:58:35
 * @version $Id$
 */

    	$(document).ready(function(){
                 $(".content").height($(window).height());
                  $(".content").width($(window).width());
                  
});
    	$(window).resize(function(){
     $(".content").height($(window).height());
                  $(".content").width($(window).width());
});