'use strict'

const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function(req, res, next) {
	res.sendFile('style.css', {root:path.join(__dirname, '../public/stylesheets')})
});

router.use(express.static('public'));



module.exports = router;