var Music = (function(obj){

	//callback function to make json data available to playlist functions
	obj.getData = function(data) {
		let _data = data;
		Music.showPlaylist(_data);
	}

	//loads json file and executes function w/ given an url
	obj.loadData = function(callback, url) {
		$.ajax({
			url: url,
			async: true
		}).done(function(data){
			callback(data);
		});
	};

	//on document load, loads first json data
	$(document).ready(function() {
		Music.loadData(Music.getData, './js/songs1.json');
	});
	return obj;

}(Music || {}));