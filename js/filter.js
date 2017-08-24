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

//creates an array of objects that contain a given selection value
Filter.filterBySelection = (selection, objArray) => {
	let filtered = [];
	let values = [];
	objArray.forEach((obj) => {
		values.push(Object.values(obj));
		console.log("values", values);
	});
	console.log("values", values);
	for (let i = 0; i < values.length; i++) {
		for (let j = 0; j < values[i].length; j++) {
			if (values[i][j] === selection) {
				filtered.push(objArray[i]);
			}
		}
	}
	console.log("filtered", filtered);
	return filtered;
};

module.exports = Filter;