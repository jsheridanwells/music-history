var Music = (function(obj){

	obj.getData = function(data) {
		let _data = data;
		Music.showPlaylist(_data);
	}

	obj.loadData = function(callback, url) {
		$.ajax({
			url: url,
			async: true
		}).done(function(data){
			callback(data);
		});
	};

	$(document).ready(function() {
		Music.loadData(Music.getData, './js/songs1.json');
	});
	return obj;

}(Music || {}));