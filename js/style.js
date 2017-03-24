/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-20 10:58:35
 * @version $Id$
 */

    	$(document).ready(function(){
    		var $he=$(window).height() ;
    		console.log($he);
                 $(".slideBox").height($he/2);
                  $(".idnex-main").height($he/2);
                  $(".slideBox .bd img").height($he/2);
                    $(".content").height($he);
                  $(".content").width($(window).width());
                  
});
    	$(window).resize(function(){
                  $(".idnex-main").height($he/2);
    		   $(".slideBox").height($he/2);
                  $(".slideBox .bd img").height($he/2);
     $(".content").height($(window).height());
                  $(".content").width($(window).width());
});