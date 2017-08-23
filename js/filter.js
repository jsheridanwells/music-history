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

module.exports = Filter;