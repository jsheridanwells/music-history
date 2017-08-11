var Music = (function(){

	//object to store new song information
	let playListObj = function(song, artist, album) {
		this.song = song,
		this.artist = artist,
		this.album = album
	}

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
		Music.showPlaylist(newSong);
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
}());