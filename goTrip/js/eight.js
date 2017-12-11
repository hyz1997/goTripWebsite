var smallDiv = ['small_show1','small_show2'];
var text = ['place_introduce1','place_introduce2']
var i = 0;
$(function() {
	$(".right").click(function() {
		if (i!=1) {
			i++;
			$(".small_show").hide();
			$('#'+smallDiv[i]).show();
			console.log(smallDiv[i]);
		}
		
		

	});
	$(".left").click(function() {
		if(i==0) {
			i=1;
		} else {
			i--;
			$(".small_show").hide();
			$('#'+smallDiv[i]).show();
			console.log(smallDiv[i]);
		}
		
	});
	$("#small_show1 li").click(function() {
		var src = $(this).find('img')[0].src
		$(".big_show img").attr('src',src);
		$(".place_introduce").hide();
		$('#place_introduce1').show();
		console.log('#place_introduce1');
	});
	$("#small_show2 li").click(function() {
		var src = $(this).find('img')[0].src
		$(".big_show img").attr('src',src);
		$(".place_introduce").hide();
		$('#place_introduce2').show();
		console.log('#place_introduce2');
	});
})