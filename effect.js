document.addEventListener("DOMContentLoaded", function(){
	var animation = document.querySelectorAll(".animation");
	var statusLoad = "off";
	window.onscroll = function() {
		for (var i = 0; i < animation.length; i++) {
			console.log(i);
			var space = animation[i].offsetTop - 500;
			if(window.pageYOffset > animation[i].offsetTop - 600) {
				animation[i].classList.add("load-animation");
			}
		}
	}
});

