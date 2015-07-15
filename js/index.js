'use strict';

var currentUser = {
  handle: '@bradwestfall',
  img: 'brad.png',
  id: 1
};

// var $ = require ('jquery');

$(function () {

	$('#main').on('click', 'textarea', function(){
		$(this).parent('form').toggleClass('expand')
	})

	console.log('whats up')


});
