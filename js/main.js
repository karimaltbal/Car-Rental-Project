var    txt1=document.getElementById("user");
var    txt2=document.getElementById("password-field");
var    div=document.getElementById("div1");
var    btn=document.getElementById("bbtt");
btn.onclick=function(){
	
if(txt1.value==="karimaltbal@gmail.com" && txt2.value==="01128596367"){
	console.log("dsfdaa")
   //window.open ("https://asd5742.blogspot.com/","Get Your Pictures");
   location="System/home/home.html";
}else{
div.innerHTML="The User Name OR Password is Wrong";
}
};




/**************************************** */
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);




