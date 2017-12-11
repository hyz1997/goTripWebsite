var Img = ['img/ta_1.jpg','img/index-show4.jpg','img/ta_4.jpg','img/ta_5.jpg'];
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

    /*$('#q1').mouseover(function(){
        console.log(this);
        // $(this).find('.zhezhao').css('display','block');
        $('#p1').fadeIn(1000);
        $('#p1').css('cursor','pointer').stop(false,true);
    });
    $('#q1').mouseout(function(){
        $('#p1').fadeOut(1000); 
        $('#p1').css('cursor','pointer').stop(true,true);
    });
    $('#q2').mouseover(function(){
        console.log(this);
        // $(this).find('.zhezhao').css('display','block');
        $('#p2').fadeIn(1000);
        $('#p2').css('cursor','pointer').stop(false,true);
    });
    $('#q2').mouseout(function(){
        $('#p2').fadeOut(1000); 
        $('#p2').css('cursor','pointer').stop(true,true);
    });
    $('#q3').mouseover(function(){
        console.log(this);
        // $(this).find('.zhezhao').css('display','block');
        $('#p3').fadeIn(1000);
        $('#p3').css('cursor','pointer').stop(false,true);
    });
    $('#q3').mouseout(function(){
        $('#p3').fadeOut(1000); 
        $('#p3').css('cursor','pointer').stop(true,true);
    });
    $('#q4').mouseover(function(){
        // $(this).find('.zhezhao').css('display','block');
        $('#p4').fadeIn(1000);
        $('#p4').css('cursor','pointer').stop(false,true);
    });
    $('#q4').mouseout(function(){
        $('#p4').fadeOut(1000); 
        $('#p4').css('cursor','pointer').stop(true,true);
    });*/
    $("#q1 img").hover(function() {
        $(this).next().show();
        console.log(2);
    },function() {
        $(this).next().hide();
    });
    $("#q3 img").hover(function() {
        $(this).next().show();
        console.log(2);
    },function() {
        $(this).next().hide();
    });
})