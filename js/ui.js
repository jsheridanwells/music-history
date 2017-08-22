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