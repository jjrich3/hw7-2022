var video = document.querySelector("#player1");

//pauses video on page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
	video.pause();
});

//If play button is clicked, plays video
document.getElementById("play").addEventListener("click", playVid);
function playVid() {
	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
}

//If pause button is clicked, pauses video
document.getElementById("pause").addEventListener("click", pauseVid);
function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

//If slow down button is clicked, slows down video by 10% each click
document.getElementById("slower").addEventListener("click", slowVid);
function slowVid() {
	video.playbackRate *= 0.9;
	console.log("current playback speed: " + video.playbackRate);
}

//If speed up button is clicked, speeds up video by 10% each click
document.getElementById("faster").addEventListener("click", fastVid);
function fastVid() {
	video.playbackRate *= 1/(0.9);
	console.log("current playback speed: " + video.playbackRate);
}

//If skip ahead button is clicked, skips 10 seconds of video
document.getElementById("skip").addEventListener("click", skipVid);
function skipVid() {
	video.currentTime = video.currentTime + 10;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.pause();
	}
	console.log("current video time: " + video.currentTime);
	//console.log(video.duration);
}
document.getElementById("slider").addEventListener("input", function() {volumeVid()} );
function volumeVid(){
	video.volume = document.getElementById("slider").value / 100.0;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
}

//mutes and unmutes video
document.getElementById("mute").addEventListener("click", function() {muteVid()} );
function muteVid(){
	if(video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("mute")
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("unmute")
	}
	console.log("mute")
}

//styled and original class display
document.getElementById("vintage").addEventListener("click", function() {vintageVid()} );
document.getElementById("orig").addEventListener("click", function() {origVid()} );

function vintageVid(){
	video.classList.add("oldSchool");
}
function origVid(){
	video.classList.remove("oldSchool");
}
