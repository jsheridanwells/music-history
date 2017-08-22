'use strict';
let Ui = require('./ui.js');


let Music = {};

//callback function to make json data available to playlist functions
Music.getData = function(data) {
	let _data = data;
	Ui.showPlaylist(_data);
};

//loads json file and executes function w/ given an url
Music.loadData = function(callback, url) {
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

