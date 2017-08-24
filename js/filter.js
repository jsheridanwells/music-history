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
		console.log("values", values);
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
	return _filtered;
};

module.exports = Filter;