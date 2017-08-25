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