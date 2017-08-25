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