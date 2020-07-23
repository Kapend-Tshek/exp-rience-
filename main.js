
var images =[
	"10stw-evergreens-white-social-1920x1080-309242221.jpg",
	"EZDBxaVXkAYkFJU.jpg",
	"fortnite-metal-team-leader-pack-fr-1920x1080-347024362.jpg",
	"fortnite-save-the-world-pirates-1920x1080-346927872.jpg"
];
var num = 0;
function next(){
	var fond = document.querySelector(".fond");
	num++;
	if(num >= images.length){
		num = 0;
	}
	fond.src = images[num];
}

function prev(){
	var fond = document.querySelector(".fond");
	num--;
	if(num < 0 ){
		num = images.length-1;
	}
	fond.src = images[num];
}

