'use strict';
let Filter = require('./filter.js');
let Music = require('./data-loader.js');

//loads songs from json to List Music view
function listMusic(data) {
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

function makeAlbumSelector(obj, selectId) {
	let content = '<option></option>';
	obj.forEach((item) => {
		content += `<option value="${item.album}">${item.album}</option>`;
	});
	let $newSelect = $('select').attr('id', selectId);
	$newSelect.append(content);
	$('#artist-album-select').append($newSelect);
}

//loads artists and albums to selectors
$(window).ready(function() {
	Music.loadSongs('../js/songs1.json').then((data)=>{
		Filter.loadSelectorItems(data);
		makeSelector(Filter.getArtists(), '#artists');
		listMusic(Music.getSongs());
	});
});

$('#artists').change(() => {
	let value = $('select').find(':selected').text();
	Music.loadSongs('../js/songs1.json')
	.then((data)=>{
		listMusic(Filter.filterBySelection(value, data));
		makeAlbumSelector(Filter.getFiltered(), 'albums');
	});
});