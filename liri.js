//importing node modules needed to run functions
require("dotenv").config();
let fs = require("fs");
let request = require("request");
let keys = require("./keys.js");
let twitter = require("twitter");
let Spotify = require("node-spotify-api");
let Omdb = require("omdb");
let argument = process.argv[2];
let userInput = process.argv[3];

//creating variables for keys
// var spotifyKeys = new spotify;

const client = new twitter(keys.twitter);


function myTweets(error, response, body) {
	
	client.get('search/tweets', {q: 'steveSalazarr'} , (error, data, response) => {
		if (error) {
			console.log(error);
			return;
		}		
	
	let tweets = data.statuses;

	let header = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'

	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TWITTER RESULTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
	
		for(let i = 0; i < tweets.length; i++) {

			console.log(header + "\n" + tweets[i].created_at)
			console.log("\n" + tweets[i].text);
		}
	})	
}

// myTweets();

const spotify = new Spotify(keys.spotify);

function searchSpotify() {

	let songName = userInput;
	
	if (!songName) {
		songName = "No Role Modelz";
	}

	songParams = songName;
	spotify.search({type: 'track', query: songParams, limit: 1},

	 function(error, data) {
		if (error) {
			console.log(error);
			return;
		}

		let tracks = data.tracks.items;
		for(let i = 0; i < tracks.length; i++) {
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~SPOTIFY SEARCH RESULTS~~~~~~~~~~~~~~~~~~~~~~~~~");
			console.log("\n ARTIST NAME: " + tracks[i].album.artists[i].name);
			console.log("\n ALBUM NAME: " + tracks[i].album.name);
			console.log("\n SONG NAME: " + tracks[i].name);
			console.log("\n PREVIEW LINK: " + tracks[i].preview_url);
			
		}
	})

}

// searchSpotify();

function movieThis() {

	let movieTitle = userInput;

	if (!movieTitle) {
		movieTitle = 'Mr. Nobody';
	}

	request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", (error, response, body) => {

		if (error) {
			console.log(error);
			return;
		}

		let movieObject = JSON.parse(body);

		console.log(movieObject);

		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~MOVIE SEARCH RESULTS~~~~~~~~~~~~~~~~~~~~~~~~~");
		console.log('\n TITLE: ' + movieObject.Title);
		console.log('\n YEAR RELEASED: ' + movieObject.Year);
		console.log('\n IMDB RATING: ' + movieObject.Ratings[0].Value);
		console.log('\n ROTTEN TOMATOES RATING: ' + movieObject.Ratings[1].Value);
		console.log('\n PRODUCED IN: ' + movieObject.Country);
		console.log('\n LANGUAGE: ' + movieObject.Language);
		console.log('\n PLOT: ' + movieObject.Plot);
		console.log('\n ACTORS: ' + movieObject.Actors);
	})
}

// movieThis();


function doWhatItSays() {

	fs.readFile("random.txt", "UTF-8", (error, data) => {

		if (error) {
			console.log(error);
			return;
		}

		loggedData = data.split(', ');
		console.log(loggedData);

		let command;
		let params;

		command = loggedData[2];
		params = loggedData[3];

		// params = params.replace('"', '');

		switch(command) {

			case 'my-tweets':
				userInput = params;
				myTweets();
				break;

			case 'spotify-this-song':
				userInput = params;
				searchSpotify();
				break;

			case 'search-movie':
				userInput = params;
				movieThis();
				break;
		}

	})

	doWhatItSays();

}