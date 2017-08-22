(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./ui.js":3}],2:[function(require,module,exports){
'use strict';
let Ui = require('./ui.js');

//object to store new song information
var playListObj = function(song, artist, album) {
	this.song = song,
	this.artist = artist,
	this.album = album
};

//show addSong menu
function viewAdd() {
	$('#add-show').attr('class', 'disabled');
	$('#list-show').removeAttr('class');
	$('#add-music-view').css('display', 'flex');
	$('#list-music-view').css('display', 'none');
}

//hide addSong menu
function viewList() {
	$('#list-show').attr('class', 'disabled');
	$('#add-show').removeAttr('class');
	$('#list-music-view').css('display', 'flex');
	$('#add-music-view').css('display', 'none');
}

//add new song object to playlist
function addToList(song, artist, album) {
	let newSong = [];
	newSong.push(new playListObj(song, artist, album));
	Ui.showPlaylist(newSong);
}


function clearForm() {
	$('#song-field').val('');
	$('#artist-field').val('');
	$('#album-field').val('');
}

$('#add-show').click(viewAdd);

$('#list-show').click(viewList);

//takes values in addSong form fields when add button clicked
$('#add-music-button').click(function() {
	if (    $('#song-field').val() !== '' &&
			$('#artist-field').val() !== '' &&
			$('#album-field').val() !== '') {
		addToList(
				$('#song-field').val(),
				$('#artist-field').val(),
				$('#album-field').val()
			);
	}
	clearForm();
	viewList();
});

//takes values in addSong form fields when enter key is pressed
$('#add-music-view').keyup(function(e){
	if (e.which === 13) {
		if (    $('#song-field').val() !== '' &&
				$('#artist-field').val() !== '' &&
				$('#album-field').val() !== '') {
			addToList(
					$('#song-field').val(),
					$('#artist-field').val(),
					$('#album-field').val()
				);
		} else {
			$('#add-music-view').off('click');
		}
	clearForm();
	viewList();
	}
});
},{"./ui.js":3}],3:[function(require,module,exports){
'use strict';
let Ui = {};

let $mainRow = $('#main-row');

//makes playlist with song data and appends to dom
Ui.showPlaylist = function (data) {
	let content = '';
	let $newDiv = $('<div></div');
	data.forEach((song)=>{
		content += `
			<h3>${song.song}</h3>
			<ul>
				<li>${song.song}</li>
				<li>${song.artist}</li>
				<li>${song.album}</li>
			</ul>
		`;
	});
	$newDiv.append(content).append($mainRow);
	$('#main').append($newDiv);
};

module.exports = Ui;
},{}]},{},[1,2,3]);
