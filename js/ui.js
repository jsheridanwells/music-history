'use strict';
let Filter = require('./filter.js');
let Music = require('./data-loader.js');

//creates selectors with each item in an array as an option
function makeSelector(arr, selectId) {
	let content = '';
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
	});
});