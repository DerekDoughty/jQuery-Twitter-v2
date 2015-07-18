'use strict';
var $ = require ('jquery');
var tmpl = require ('./template.js')

var currentUser = {
  handle: '@DerekDoughty',
  img: '../images/derekfire.jpg',
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

function getReplies(){
	console.log('replies')
	return $.get(repliesUrl)
	.done(function (getRepliesFromRepliesUrl){
		console.log(getRepliesFromRepliesUrl)
	})
}

getReplies()

	console.log('im loaded')

function renderTweet (user, message) {
	var idTweet = 2;
	var fields = {
		user: user,
		message: message,
		idTweet: idTweet
	}
	return tmpl.tweet(fields)
}

function renderThread (user, message, replies, idTweet) {

	var tweetHtml = renderTweet(user, message, idTweet)
	var fields = {
		originalTweet: tweetHtml,
		compose: tmpl.compose(),
	}

	return tmpl.thread(fields)
}

function renderCompose () {

	return tmpl.compose()

}

$(function () {

	console.log('doc-ready')

	$('#main').on('click', 'textarea', function () {
		$(this).parent('form').toggleClass('expand')
			console.log('whats up')
	})

	$('#tweets').on('click', '.tweet', function () {
		
		$(this).parents('.thread').toggleClass('expand')

	})


	$('#main').on('click', 'button', function () {
		var message = $(this).parents('.compose').find('textarea').val()

		if ($(this).parents('.replies').length) {
			console.log(renderTweet(currentUser, message))
			$(this).parents('.replies').append(renderTweet(currentUser, message))
		
		} else {
		
			$('#tweets').append(renderThread(currentUser, message))
			
		}

		$(this).parents('.compose').removeClass('expand')

		$('textarea').val('')
		// console.log(renderThread(User, message))
		return false


	})
});