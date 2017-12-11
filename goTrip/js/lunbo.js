var Img = ['img/index-show1.jpg','img/index-show2.jpg','img/index-show5.jpg'];
var index = 0;
$(function() {
	$(".small_button li").hover(function() {
		index = $(this).index()
		$(".lunbo-show").attr('src',Img[index])
		$(this).addClass("button_active").siblings().removeClass("button_active");
	})
    setInterval(function() {
    	if(index!=3) {
    		index++;
    		i = index;
    		$(".lunbo-show").attr('src',Img[index]);
    		$('.small_button li:eq('+index+')').addClass("button_active").siblings().removeClass("button_active");
    	} else {
    		
    		index=0;
    		
    	}console.log(Img[index]);

},3000);
})