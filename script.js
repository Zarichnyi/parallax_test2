

$(window).scroll(function(){
	var scrolled=$(window).scrollTop();
	$("#parallax-bg1").css("top",(0-(scrolled*0.75))+"px");
	$("#parallax-bg2").css("top",(0-(scrolled*0.5))+"px");
	$("#parallax-bg3").css("top",(0-(scrolled*0.2))+"px");
})

