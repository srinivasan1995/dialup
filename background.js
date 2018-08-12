chrome.storage.sync.get(['soundValue'],function(object){
	console.log("soundValue = "+ object.soundValue);
	var string = object.soundValue;
	if(!object.soundValue){
		console.log("not stored anything");
		string = "dialup"
	}
	var audio = new Audio(string+'.mp3');
	audio.play();
});
