'use strict';
let Filter = require('./filter.js');
let Music = require('./data-loader.js');

//loads songs from json to List Music view
function listMusic(data) {
	console.log("firing");
	let content = '';
	data.forEach((item)=>{
		content += `
			<h3>${item.song}</h3>
			<ul>
				<li>${item.song}</li>
				<li>${item.artist}</li>
				<li>${item.album}</li>
			</ul>
		`;
	});
	$('#main').html(content);
}

//creates selectors with each item in an array as an option
function makeSelector(arr, selectId) {
	let content = '<option></option>';
	arr.forEach((item) => {
		content += `<option value="${item}">${item}</option>`;
	});
	$(selectId).html(content);
}

//loads artists and albums to selectors
$(window).ready(function() {
	Music.loadSongs('../js/songs1.json').then((data)=>{
		Filter.loadSelectorItems(data);
		makeSelector(Filter.getArtists(), '#artists');
		makeSelector(Filter.getAlbums(), '#albums');
		listMusic(Music.getSongs());
	});
});