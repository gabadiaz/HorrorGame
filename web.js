function playThunder() {
	var thunderSound = document.getElementById('thunder');
	thunderSound.play();
}

function storm() {
	playThunder();
	document.body.style.backgroundColor = "white";

	setTimeout(function() {document.body.style.backgroundColor = "black";},500);
}

function startStorm{
	//Eventually make it so that clicking also starts rain
	//var rainSound = document.getElementById('rain');
	//rainSound.loop = true;
	//rainSound.play();
	//var stormTimer = setInterval(storm, 7000);
}

function Initiate () {
	$("#ts")[0].loop = true;
	$("#ts")[0].play();
	//On clicking titlescreen, fade it out
	$(".titlescreen").on("click", function(){
		$(this).animate({
			opacity: 0
		}, 5000, function(){

		});
		$("#ts").animate({ 
			volume: 0 
		}, 5000);
		//Is this necessary? $("#ts")[0].pause();
	});
	startStorm();
}

window.onload = function() {
	Initiate();
};