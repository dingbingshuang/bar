/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-20 10:58:35
 * @version $Id$
 */

    	$(document).ready(function(){
    		var $he=$(window).height() ;
    		console.log($he);
                 $(".content").height($he);
                  $(".content").width($(window).width());
                  
});
    	$(window).resize(function(){
     $(".content").height($(window).height());
                  $(".content").width($(window).width());
});