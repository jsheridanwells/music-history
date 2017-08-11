var Music = (function(obj){
	let $mainRow = $('#main-row');

	//makes playlist with song data and appends to dom
	obj.showPlaylist = function (data) {
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

		//more button loads second json file then disappears
		$mainRow.click(function(){
			Music.loadData(Music.getData, './js/songs2.json');
			$mainRow.hide();
		});
	};
	return obj;
}(Music || {}));