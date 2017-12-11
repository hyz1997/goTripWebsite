$(window).bind("scroll", function () {
        var height = $(window).scrollTop();
        var height = parseInt(height);
        console.log(height);
    	if (height < 600) {
    		$(".nav-con").css("position","absolute");
    		$(".nav-con").css('top','200px');
    		$(".nav-con").css('left','0');
        }
    	else  {
    		$(".nav-con").css("position","fixed");
    		$(".nav-con").css('top','95px');
    		$(".nav-con").css('left','65%');
    	}
    	// else if(height>2050){
    	// 	$(".ad_right").css("position","fixed");
    	// }
    });
$(function() {
   $(".nav-con ul li").click(function() {
        $(this).addClass("click").siblings().removeClass("click");
   }) 
})