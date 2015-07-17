'use strict';
var $ = require ('jquery');
var tmpl = require ('./template.js')

var currentUser = {
  handle: '@DirtyD',
  img: 'derekfire.jpg',
  id: 1
};



var usersUrl = 'http://localhost:3000/users'
var tweetsUrl = 'http://localhost:3000/tweets'
var repliesUrl = 'http://localhost:3000/replies'


 function getUsers(){
 	console.log('hey')
 	return $.get(usersUrl)
 	.done(function (getUsersFromUserUrl){
 		console.log(getUsersFromUserUrl)
 	})
 }
getUsers()

 function getTweets(){
 	console.log('tweets')
 	return $.get(tweetsUrl)
 	.done(function (getTweetsFromTweetsUrl){
 		console.log(getTweetsFromTweetsUrl)
 	})
 }
getTweets()


	function renderCompose () {

		return tmpl.compose()

	}

$(function () {
	console.log('im loaded')


	$('#main').on('click', 'textarea', function () {
		$(this).parent('form').toggleClass('expand')
			console.log('whats up')
	})

	$('#tweet').on('click', '.tweet', function () {
		
		$(this).parents('.thread').toggleClass('expand')

	})


	$('main').on('click', 'button', function () {
		var message = $(this).parents('.compose').find('textarea').val()

		if ($(this).parents('.replies').length) {
			console.log($(this))
			$(this).parents('.replies').append(renderTweet(User, message))
		
		} else {
		
			$('.tweets').append(renderThread(User, message))
			
		}

		$(this).parents('.compose').removeClass('expand')

		$('textarea').val('')
		// console.log(renderThread(User, message))
		return false


	})

});


