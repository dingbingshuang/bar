/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-20 10:58:35
 * @version $Id$
 */

    	$(document).ready(function(){
                 $(".content").height($(window).height());
                  $(".content").width($(window).width());
 this.disableTouchUpOver = function(){
  this.startY = 0;
  this.endY = 0;
  document.addEventListener('touchstart', function (event) {
    var touch = event.touches[0];
    this.startY = touch.pageY;
  }, false);
  document.addEventListener('touchmove', function (event) {
    var touch = event.touches[0];
    this.endY = touch.pageY;
    var y = 0;
    //scrollTop为垂直方向相对于顶部的距离，如果在body本身为overflow:auto属性，则获取body元素的scrollTop，否则获取子元素包含overflow:auto属性的scrollTop
    if(document.body.scrollTop > 0){
      y = document.body.scrollTop;
    }else{
      y = $(".body").eq(0)[0].scrollTop;
    }
    if(this.endY > this.startY){
      if(y <= 0){
        event.preventDefault();
      }
    }
    this.startY = endY;
  }, false);
};
});
    	$(window).resize(function(){
     $(".content").height($(window).height());
                  $(".content").width($(window).width());
});