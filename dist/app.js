(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let Views = require('./views.js');
let Music = require('./data-loader.js');
let Ui = require('./ui.js');

let makeSongObj = (song, artist, album) => {
	let newSong = {};
	newSong.song = song;
	newSong.artist = artist;
	newSong.album = album;
	console.log("new songs", newSong);
	Music.addSong(newSong);
	return Music.getSongs();
};

$('#add-music-button').click(()=>{
	let song = $('#song-field').val();
	let artist = $('#artist-field').val();
	let album = $('#album-field').val();
	console.log(song, artist, album);
	Ui.listMusic(makeSongObj(song, artist, album));
	Views.showListMusic();
});

//1.  when the user fills out song fields

//2. then clicks "add" button (#add-music-button)
	//2.1 or enter key

//3. get values of fields

//4. add to _songs object

//5. go to list-view

//6. reload songs into DOM

//7. reload artists and albums into selectors
},{"./data-loader.js":2,"./ui.js":4,"./views.js":5}],2:[function(require,module,exports){
'use strict';
let _songs = [];


let Music = {
	//loads all music from the database when given an url
	loadSongs: function(url) {
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: url
			})
			.done((data)=>{
				resolve(data);
				data.forEach((item)=>{
					_songs.push(item);
				});
			}).fail((xhr, status, error) => {
				reject(error);
			});
		});
	},
	//sends songs data
	getSongs: function() {
		console.log("_songs", _songs);
		return _songs;
	},
	//adds song to _songs array
	addSong: function(obj) {
		_songs.push(obj);
	}
};

module.exports = Music;
},{}],3:[function(require,module,exports){
'use strict';
let Music = require('./data-loader.js');
let Filter = {};
let _artistList = [];
let _albumList = [];
let _filtered = [];

// removes duplicate items from array
function removeDuplicates(arr) {
	return arr.filter((a,b)=>{
		return arr.indexOf(a) === b;
	});
}

// creates _artistList and _albumList, removing duplicates
Filter.loadSelectorItems = (data) => {
	let arr1 = [];
	let arr2 = [];
	data.forEach((item)=>{
		arr1.push(item.artist);
		arr2.push(item.album);
	});
	_artistList = removeDuplicates(arr1);
	_albumList = removeDuplicates(arr2);
};

Filter.getArtists = () => {
	return _artistList;
};

Filter.getAlbums = () => {
	return _albumList;
};

Filter.getFiltered = () => {
	return _filtered;
};

//creates an array of objects that contain a given selection value
Filter.filterBySelection = (selection, objArray) => {
	_filtered = [];
	let values = [];
	objArray.forEach((obj) => {
		values.push(Object.values(obj));
	});
	console.log("values", values);
	for (let i = 0; i < values.length; i++) {
		for (let j = 0; j < values[i].length; j++) {
			if (values[i][j] === selection) {
				_filtered.push(objArray[i]);
			}
		}
	}
	console.log("filtered", _filtered);
	Filter.loadSelectorItems(_filtered);
	return _filtered;
};

module.exports = Filter;
},{"./data-loader.js":2}],4:[function(require,module,exports){
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

},{"./data-loader.js":2,"./filter.js":3}],5:[function(require,module,exports){
'use strict';

//show add music view, hide list music view
function showAddMusic() {
	console.log("working");
	$('#add-show').attr('class', 'disabled');
	$('#list-show').removeAttr('class');
	$('#add-music-view').css('display', 'flex');
	$('#list-music-view').css('display', 'none');
}

//show list music view, hide add music view
function showListMusic() {
	console.log("working");
	$('#list-show').attr('class', 'disabled');
	$('#add-show').removeAttr('class');
	$('#list-music-view').css('display', 'flex');
	$('#add-music-view').css('display', 'none');
}

$('#add-show').click(showAddMusic);

$('#list-show').click(showListMusic);

module.exports = {showListMusic};
},{}]},{},[1,2,3,4,5]);
