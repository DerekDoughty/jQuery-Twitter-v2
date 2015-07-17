'use strict';

var Handlebars = require('hbsfy/runtime');
var tweet = require('../templates/tweet.handlebars');
var thread = require('../templates/thread.handlebars');
var compose = require('../templates/compose.handlebars');

module.exports = {
	tweet: tweet,
	thread: thread,
	compose: compose
}