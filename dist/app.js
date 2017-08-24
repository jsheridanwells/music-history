(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let _songs = [];


let Music = {
	//load all music from the database when given an url
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
	//send songs data
	getSongs: function() {
		return _songs;
	}
};

module.exports = Music;
},{}],2:[function(require,module,exports){
'use strict';
let Music = require('./data-loader.js');

let Filter = {};

let _artistList = [];
let _albumList = [];

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
	// console.log("_artistList", _artistList);
	return _artistList;
};

Filter.getAlbums = () => {
	return _albumList;
};

module.exports = Filter;
},{"./data-loader.js":1}],3:[function(require,module,exports){
// 'use strict';
// let Ui = require('./ui.js');

// //object to store new song information
// var playListObj = function(song, artist, album) {
// 	this.song = song,
// 	this.artist = artist,
// 	this.album = album
// };

// //show addSong menu
// function viewAdd() {
// 	$('#add-show').attr('class', 'disabled');
// 	$('#list-show').removeAttr('class');
// 	$('#add-music-view').css('display', 'flex');
// 	$('#list-music-view').css('display', 'none');
// }

// //hide addSong menu
// function viewList() {
// 	$('#list-show').attr('class', 'disabled');
// 	$('#add-show').removeAttr('class');
// 	$('#list-music-view').css('display', 'flex');
// 	$('#add-music-view').css('display', 'none');
// }

// //add new song object to playlist
// function addToList(song, artist, album) {
// 	let newSong = [];
// 	newSong.push(new playListObj(song, artist, album));
// 	Ui.showPlaylist(newSong);
// }


// function clearForm() {
// 	$('#song-field').val('');
// 	$('#artist-field').val('');
// 	$('#album-field').val('');
// }

// $('#add-show').click(viewAdd);

// $('#list-show').click(viewList);

// //takes values in addSong form fields when add button clicked
// $('#add-music-button').click(function() {
// 	if (    $('#song-field').val() !== '' &&
// 			$('#artist-field').val() !== '' &&
// 			$('#album-field').val() !== '') {
// 		addToList(
// 				$('#song-field').val(),
// 				$('#artist-field').val(),
// 				$('#album-field').val()
// 			);
// 	}
// 	clearForm();
// 	viewList();
// });

// //takes values in addSong form fields when enter key is pressed
// $('#add-music-view').keyup(function(e){
// 	if (e.which === 13) {
// 		if (    $('#song-field').val() !== '' &&
// 				$('#artist-field').val() !== '' &&
// 				$('#album-field').val() !== '') {
// 			addToList(
// 					$('#song-field').val(),
// 					$('#artist-field').val(),
// 					$('#album-field').val()
// 				);
// 		} else {
// 			$('#add-music-view').off('click');
// 		}
// 	clearForm();
// 	viewList();
// 	}
// });
},{}],4:[function(require,module,exports){
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
},{"./data-loader.js":1,"./filter.js":2}]},{},[1,2,3,4]);
