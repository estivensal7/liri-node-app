# liri-node-app

LIRI is a "Language Interpretation and Recognition Interface" used to find information on music, movies, and tweets. All of this information is gathered by the use of Spotify's, OMDb's, and Twitter's API's. 

##Getting Started:

Once Node.js is installed on your local machine. Clone the liri-node-app and cd your way into the directory. Lastly, make sure to run "npm install" for all of the dependancies.

###Commands and each of their functions

1. node liri.js my-tweets
	
	* This command will display the latest 20 tweets, and their time of creation in your terminal/bash window.

2. node liri.js spotify-this-song '<song name here>'
	
	* This will display Artist(s), the Song Name, Album, and a Preview Link of the song on Spotify.

3. node liri.js search-movie '<movie name here>'

	* Title of movie
	* Year the movie came out
	* IMDb Rating of the movie
	* Rotten Tomatoes rating of the movie
	* Country where the movie was produced
	* Language of the movie
	* Plot of the movie
	* Actors in the movie

4. node liri.js do-what-it-says

	* This command will run spotify-this-song for "I Want it That Way," as it follows the text in random.txt.

	* Feel free to change the text in random.txt, and have LIRI do whatever you'd like from the command options.

###Built With: 

	* Node.js
	* Twitter API
	* Spotify API
	* OMDb API
	* Request API

###Author

	* Estiven Salazar	


