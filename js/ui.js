let listShow = document.getElementById('list-show');
let addShow = document.getElementById('add-show');
let list = document.getElementById('list-music-view');
let add = document.getElementById('add-music-view');

let showAdd = ()=> {
	listShow.classList.remove('disabled');
	addShow.classList.add('disabled');
	list.style = 'display: none';
	add.style = 'display: flex';
}

let showList = ()=> {
	listShow.classList.add('disabled');
	addShow.classList.remove('disabled');
	list.style = 'display: flex';
	add.style = 'display: none';
}

addShow.addEventListener('click', showAdd);
listShow.addEventListener('click', showList);