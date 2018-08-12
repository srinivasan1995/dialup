$(document).ready(function(){
$('#submitValue').click(function(){
 var temp = $('input[name=sound]:checked').val(); 
	 		chrome.storage.sync.set({'soundValue': temp},function(){
				console.log(temp + "value stored ");
			});

	 });
});