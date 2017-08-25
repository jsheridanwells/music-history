'use strict';
let Filter = require('./filter.js');
let Music = require('./data-loader.js');

let Ui = {};

//loads songs from json to List Music view
Ui.listMusic = (data) => {
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
};

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
	let $newSelect = $('<select></select>').attr('id', selectId);
	$newSelect.append(content);
	$('#artist-album-select').append($newSelect);
}

Ui.loadSelectors = (data) => {
	Filter.loadSelectorItems(data);
	makeSelector(Filter.getArtists(), '#artists');
	makeSelector(Filter.getAlbums(), '#albums');
	Ui.listMusic(Music.getSongs());
};

//loads artists to selectors, loads all songs to list-music-view
$(window).ready(function() {
	Music.loadSongs('../js/songs1.json').then((data)=>{
		Ui.loadSelectors(data);
	});
});

//when artist selector is changed, loads only songs from artist, loads albums to selector
$('#artists').change(() => {
	let value = $('select').find(':selected').text();
	Ui.listMusic(Filter.filterBySelection(value, Music.getSongs()));
});

$('#albums').change(() => {
	let value = $('#albums').find(':selected').text();
	Ui.listMusic(Filter.filterBySelection(value, Music.getSongs()));
});

module.exports = Ui;
