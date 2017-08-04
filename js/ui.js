var Music = (function(obj){
	let listShow = document.getElementById('list-show');
	let addShow = document.getElementById('add-show');
	let list = document.getElementById('list-music-view');
	let add = document.getElementById('add-music-view');

	obj.showAdd = ()=> {  // call to add songs to list
		listShow.classList.remove('disabled');
		addShow.classList.add('disabled');
		list.style = 'display: none';
		add.style = 'display: flex';
	}

	obj.showList = ()=> {  // back to song list display
		listShow.classList.add('disabled');
		addShow.classList.remove('disabled');
		list.style = 'display: flex';
		add.style = 'display: none';
	}

	addShow.addEventListener('click', obj.showAdd);
	listShow.addEventListener('click', obj.showList);
	return obj;
}(Music || {}));
